require('dotenv').config()

const express = require('express');
const http = require('http');
const path = require('path');
const oracledb = require('oracledb');

const { init } = require('./db');
const config = require('./dbconfig');
const demoSetup = require('./demosetup');

const PORT = process.env.SERVER_PORT;

const app = express();
const httpServer = http.createServer(app);
const io = require('socket.io')(httpServer);

init();

app.use(express.static(path.join(__dirname + '/Railway-Track-Monitoring-master')));
app.use(express.urlencoded({ extended: true }));

httpServer.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));

httpServer.on('error', err => console.error('Error in listening:\n', err.message));
httpServer.on('request', (req, res) => handleRequest(req));

const handleRequest = async (req, res) => {
  console.log(req.url);
}