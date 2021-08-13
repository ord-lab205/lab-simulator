require('dotenv').config()

const express = require('express');
const http = require('http');
const path = require('path');
const oracledb = require('oracledb');

const { init, selectRun } = require('./db');
const config = require('./config/oracle');
const demoSetup = require('./demosetup');

const PORT = process.env.SERVER_PORT;

const app = express();
const httpServer = http.createServer(app);
const io = require('socket.io')(httpServer);

// 데이터 베이스 초기 처리
// 테이블 재생성
init();

// 정적 파일들의 경로 설정
// 따로 라우팅 하지 않음 (각 페이지마다 있으므로 라우팅해서 웹소켓 연결하는 방법도 있음)
app.use(express.static(path.join(__dirname + '/Railway-Track-Monitoring-master')));
app.use(express.urlencoded({ extended: true }));

// 웹소켓 연결
io.on('connection', socket => {
  console.log('A user is connected.');

  // 위험 요소에 대한 이벤트
  socket.on('warning', data => {});

  // 일정 간격으로 데이터를 클라이언트로 전송
  // 데이터 변경 시 콜백 처리를 할 수 있는 oracledb의 메서드가 있다면 변경 예정.
  // 추가로 현재는 테스트 중이므로, 이후 [Start] 버튼을 누를 시 이벤트가 처리 될 수 있도록 변경 예정. (변경 완료. 클라이언트 부분 추가로 변경해야함.)
  socket.on('Residence area button', () => {
    setInterval(() => {
      selectRun('intergrated_sensor').then(result => {
        io.emit('Residence area', result);
      });
    }, 2000);
  })

  socket.on('Bridge button', () => {
    setInterval(() => {
      selectRun('intergrated_sensor').then(result => {
        io.emit('Bridge', result);
      });
    }, 2000);
  })

  socket.on('Tunnel button', () => {
    setInterval(() => {
      selectRun('intergrated_sensor').then(result => {
        io.emit('Tunnel', result);
      });
    }, 2000);
  })

  socket.on('Animals button', () => {
    setInterval(() => {
      selectRun('intergrated_sensor').then(result => {
        io.emit('Animals', result);
      });
    }, 2000);
  })
  
  socket.on('close', () => {
    socket.disconnect();
  })
})

// Listening
httpServer.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));

// 서버에서 에러 및 요청을 받을 시 처리
httpServer.on('error', err => console.error('Error in listening:\n', err.message));
httpServer.on('request', (req, res) => handleRequest(req));

// 서버에서 요청을 받았을 때 처리
const handleRequest = async (req, res) => {
  console.log(req.url);
}

// 처리 중 에러에 대한 처리
const handleError = async (res, text, err) => {
  if (err) {
    text += ": " + err.message;
  }
  console.error(text);
  response.writeHead(500, {"Content-Type": "text/html"});
  response.write(text);
  response.end();
}

// 런타임 환경 종료 시 Pool Close
const closePoolAndExit = async () => {
  console.log("\nTerminating");
  try {
    await oracledb.getPool().close(10);
    console.log("Pool closed");
    process.exit(0);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

process
  .once('SIGTERM', closePoolAndExit)
  .once('SIGINT',  closePoolAndExit);