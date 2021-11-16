// Mode
const NODE_ENV = process.env.NODE_ENV;

// Modules
const path = require('path');
const appRoot = require('app-root-path');
require('dotenv').config({ path: path.resolve(`${appRoot}`, NODE_ENV === 'production' ? '.env' : '.env.dev')});

// Loads
require('./db');
const app = require('./app');

// Environment variables
const HOST = process.env.HOST;
const PORT = process.env.PORT;

// Listening
const server = app.listen(PORT);
if (NODE_ENV !== 'production') console.log(`http://${HOST}:${PORT}/`);


// server.on('request', (req, res) => {
//   console.log(req.originalUrl);
// })