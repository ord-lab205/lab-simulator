const express = require('express');
const http = require('http');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV;
const HTTP_PORT = process.env.HTTP_PORT || 3000;

if (NODE_ENV !== 'production') {
  require('dotenv').config();
}

(() => {
  const app = express();
  const http_server = http.createServer(app);
  const io = require('socket.io')(http_server);

  app.use('/', express.static(path.join(__dirname, 'Railway-Track-Monitoring-master')));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  http_server.listen(HTTP_PORT, () => {
    if (NODE_ENV !== 'production') {
      console.log(`url: http://127.0.0.1:${HTTP_PORT}/`);
    }
  });

  http_server.on('error', err => console.error(`Error in app.js:\n${err}`));
  http_server.on('request', (req, res) => {
    const req_url = req.url;
    const arr_env_factors = ['/', 'index.html', 'general.html', '/bridge.html', '/tunnel.html', '/animals.html'];
    const bool_is__env_factor = arr_env_factors.includes(req_url);
    if (bool_is__env_factor) fn_handle__socket_io(io, conn);
  })
})();