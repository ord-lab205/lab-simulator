"use strict";

const express = require('express');

const path = require('path');
const appRoot = require('app-root-path');

const { reqLogger, logger } = require('./middleware/logger');

const app = express();


app.use(require('./routes'));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  next(createError(404));
})

app.use((err, req, res, next) => {
  // req.log.error(err);
  res.status(err.status || 500)
     .send('error');
});

module.exports = app;