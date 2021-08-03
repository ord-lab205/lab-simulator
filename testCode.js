require('dotenv').config()

const express = require('express');
const http = require('http');
const path = require('path');
const oracledb = require('oracledb');

const { init, selectRun } = require('./db');
const config = require('./dbconfig');
const demoSetup = require('./demosetup');

const PORT = process.env.SERVER_PORT;

const app = express();
const httpServer = http.createServer(app);
const io = require('socket.io')(httpServer);

init();

app.use(express.static(path.join(__dirname + '/Railway-Track-Monitoring-master')));
app.use(express.urlencoded({ extended: true }));

io.on('connection', socket => {
  console.log('A user is connected.');

  // 위험 요소에 대한 이벤트
  socket.on('warning ', data => {});

  // 일정 간격으로 데이터를 클라이언트로 전송
  setInterval(() => {
    selectRun('intergrated_sensor').then(result => {
      io.emit('ok', result);
    });
  }, 2000);
})

httpServer.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));

httpServer.on('error', err => console.error('Error in listening:\n', err.message));
httpServer.on('request', (req, res) => handleRequest(req));

const handleRequest = async (req, res) => {
  console.log(req.url);
}