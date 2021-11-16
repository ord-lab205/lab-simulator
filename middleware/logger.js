'use strict';

const pino = require('pino');
const expressPino = require('express-pino-logger');

const devOpts = {
  // prettyPrint: true, // testing purpose. depercated.
  transport: {
    target: "pino-pretty",
    options: {
      translateTime: "SYS:yyyy-mm-dd HH:MM:ss",
      ignore: "pid,hostname",
    }
  },
};

const isProd = process.env.NODE_ENV === 'production' ? true : false;

let logger = pino(isProd ? {} : devOpts);
let reqLogger = expressPino({ 
  logger,
  serializers: {
    req: (req) => ({
      method: req.method,
      url: req.url,
      user: req.raw.user,
    }),
  },
});

// if (isProd) {
//   logger = pino();
//   reqLogger = expressPino();
// } else {
//   logger = pino(devOpts);
//   reqLogger = expressPino({});
// }

module.exports = {
  reqLogger,
  logger,
};



