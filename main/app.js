require('dotenv').config({
  path: path.resolve(process.cwd(), process.env.NODE_ENV == 'production' ? '.env' : '.env.dev'),
});

const express = require('express');
const http = require('http');
const path = require('path');

const obj_controller__oracle = require('./src/controller/oracle_controller');

const HTTP_PORT = process.env.HTTP_PORT || 3000;

function fn_handle__socket_io(_io) {
  'use strict';
  try {
    _io.of('/').on('connection', _socket => {
      const e_msg__occur_warning = 'occur_warning';
      const e_msg__activate_communication = 'activate communication';
      const e_msg__respond_row = 'respond_row';

      const r_name__users_activated = 'users activated';

      _socket.on(e_msg__occur_warning, _obj => {
        console.log(`Warning in a row:\n${_obj}`);
      });

      _socket.on(e_msg__activate_communication, () => {
        _socket.join(r_name__users_activated);
        setTimeout(() => _socket.leave(r_name__users_activated), 10000);
      });

      setInterval(async () => {
        const obj_a_row__t_logging = await obj_controller__oracle.fn_dml_select__a_row();
        _socket.to(r_name__users_activated).emit(e_msg__respond_row, obj_a_row__t_logging);
      });
    })
  } catch (err) {
    console.error(`Error in 'app.fn_handle__socket_io':\n${err}`);
  }
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

  http_server.on('error', err => console.error(`Error in 'app.main':\n${err}`));
  http_server.on('request', (req, res) => {
    const req_url = req.url;
    const arr_env_factors = ['/', 'index.html', 'general.html', '/bridge.html', '/tunnel.html', '/animals.html'];
    const bool_is__env_factor = arr_env_factors.includes(req_url);
    if (bool_is__env_factor) fn_handle__socket_io(io, conn);
  });
})();