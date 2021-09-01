require('dotenv').config()

const express = require('express');
const http = require('http');
const path = require('path');

const PORT = process.env.SERVER_PORT;

const app = express();
const httpServer = http.createServer(app);
const io = require('socket.io')(httpServer);
const socket = require('./socket');

// 데이터 베이스 초기 처리
// 테이블 재생성
const oracleController = require('./src/controller/oracleController');

// 정적 파일들의 경로 설정
// 따로 라우팅 하지 않음 (각 페이지마다 있으므로 라우팅해서 웹소켓 연결하는 방법도 있음)
app.use(express.static(path.join(__dirname + '/Railway-Track-Monitoring-master')));
app.use(express.urlencoded({ extended: true }));

// WebSocket을 이용한 실시간 이벤트 통신
socket(io);

// Socket.io Server Listening
httpServer.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));

// 서버에서 에러 및 요청을 받을 시 처리
httpServer.on('error', err => console.error('Error in listening:\n', err.message));
httpServer.on('request', (req, res) => handleRequest(req));

// 서버에서 요청을 받았을 때 처리
const handleRequest = async (req, res) => {
  console.log(req.url);
};

oracleController._fn_closePoolAndExit();

process
  .once('SIGTERM', closePoolAndExit)
  .once('SIGINT',  closePoolAndExit);