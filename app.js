const NODE_ENV = process.env.NODE_ENV; console.log(NODE_ENV);

const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), NODE_ENV === 'production' ? '.env' : '.env.dev') });

const express = require('express');
const http = require('http');

const morgan = require('morgan');

const HOST = process.env.HOST;
const EXPOSE_HTTP_PORT = process.env.EXPOSE_HTTP_PORT;


(() => {
  const app = express();
  const http_server = http.createServer(app);
  const io = require('socket.io')(http_server);
  // const socket = io();

  if (NODE_ENV === 'production') app.use(morgan('common', { stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' }) }));
  else app.use(morgan('short', { stream: fs.createWriteStream(path.join(__dirname, 'access_dev.log'))}));

  app.get('/', (req, res, next) => {
    console.log(req.url);
    res.status(200)
       .sendFile('index.html', { root: path.join(__dirname, 'public')});

    // fn_handle__socket_io(io);

    // res.end();
  })

  app.get('/bridge', (req, res, next) => {
    console.log(req.url);
    res.status(200)
    res.sendFile('bridge.html', { root: path.join(__dirname, 'public')});

    fn_handle__socket_io(io);
  });

  app.get('/tunnel', (req, res, next) => {
    console.log(req.url);
    // res.status(200)
    res.sendFile('tunnel.html', { root: path.join(__dirname, 'public')});

    // fn_handle__socket_io(io);
  });

  app.use(express.static(path.join(__dirname, 'public')));

  // app.use((req, res, next) => {
  //   res.redirect(301, '/');
  //   next();
  // });

  app.use((err, req, res, next) => {
    res.status(500)
       .send('Occur error:')
       .json({
         message: err.stack,
       });
    next(err);
  });

  http_server.listen(EXPOSE_HTTP_PORT, () => console.log(`http://${HOST}:${EXPOSE_HTTP_PORT}/`));

  http_server.on('error', _err => console.log(`Error:\nListening\n${_err}`));
  http_server.on('request', (req, res) => {
    // const arr__env_factors = ['/', '/index.html', '/general.html', '/bridge.html', '/tunnel.html', '/animals.html'];
    // const bool__is_env_factor = arr__env_factors.includes(req.url);
    // // console.log(bool__is_env_factor, req.url);
    // if (bool__is_env_factor) {
    //   fn_handle__socket_io(io);
    //   res.end();
    // }
  });
})();

function fn_handle__socket_io(_io) {
  'use strict';
  _io.of('/').on('connection', _socket => {
    const e_msg__occur_warning = 'occur_warning';
    const e_msg__activate_communication = 'activate communication';
    const e_msg__disactivate_communication = 'disactivate communication';
    const e_msg__respond_row = 'respond_row';

    const r_name__users_activated = 'users activated';

    let id__timer;

    _socket.on('error', _err => {
      if (_err && _err.message === "unauthorized event") {
        _socket.disconnect();
      }
    });

    _socket.on(e_msg__occur_warning, _obj => fs.createWriteStream(path.join(__dirname, 'warning_data.log')));

    _socket.on(e_msg__activate_communication, () => {
      _socket.join(r_name__users_activated);
      id__timer = setTimeout(() => _socket.leave(r_name__users_activated), 10000);
    });

    _socket.on(e_msg__disactivate_communication, () => {
      if (id__timer) clearTimeout(id__timer);
      _socket.leave(r_name__users_activated);
    });

    setInterval(() => {
      _socket.to(r_name__users_activated).emit(e_msg__respond_row, {a: 1});
    }, 2000);
  })
}

// function fn_handle__socket_io(_io) {
//   'use strict';
//   try {
//     _io.of('/').on('connection', _socket => {
//       const e_msg__occur_warning = 'occur_warning';
//       const e_msg__activate_communication = 'activate communication';
//       const e_msg__respond_row = 'respond_row';

//       const r_name__users_activated = 'users activated';

//       _socket.on(e_msg__occur_warning, _obj => {
//         console.log(`Warning in a row:\n${_obj}`);
//       });

//       _socket.on(e_msg__activate_communication, () => {
//         _socket.join(r_name__users_activated);
//         setTimeout(() => _socket.leave(r_name__users_activated), 10000);
//       });

//       setInterval(async () => {
//         const obj_a_row__t_logging = await obj_controller__oracle.fn_dml_select__a_row();
//         _socket.to(r_name__users_activated).emit(e_msg__respond_row, obj_a_row__t_logging);
//       });
//     })
//   } catch (err) {
//     console.error(`Error in 'app.fn_handle__socket_io':\n${err}`);
//   }
// }