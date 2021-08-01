require('dotenv').config()

const express = require('express');
const path = require('path');
const oracledb = require('oracledb');
const config = require('./dbconfig');
const demoSetup = require('./demosetup');

const app = express();
const PORT = process.env.SERVER_PORT;

const init = async () => {
  try {
    await oracledb.createPool(config);
    const conn = await oracledb.getConnection();
    await demoSetup.setupSD(conn);
    // await demoSetup.setupVB(conn);
    // await demoSetup.setupIS(conn);
    // await demoSetup.setupDRF(conn);
    await conn.close();

    app.use(express.static(path.join(__dirname + '/Railway-Track-Monitoring-master')));
    app.use(express.urlencoded({ extended: true }));

    const server = app.listen(PORT, () => {
      console.log("Server is running at http://localhost:" + PORT);
      console.log("Try loading a farmer such as http://localhost:" + PORT + "/3");
    })

    server.on('error', err => {
      console.log('Error in listening:\n', err.message);
    });

    server.on('request', (req, res) => {
      handleRequest(req, res);
    });

  } catch (err) {
    console.log('Error in processing:\n', err.message);
  }
}


const handleRequest = async (req, res) => {
  const id = req.url.split('/')[1];
  console.log(id);

  // let conn;

  // const sql = 'SELECT * FROM :table',
  //       bindParams = [],
  //       options = { outFormat: oracledb.OUT_FORMAT_OBJECT };

  // try {
  //   conn = await oracledb.getConnection();
  //   const result = await conn.execute(sql, bindParams, options);

    
  // } catch (err) {
  //   handleError(res, "handleRequest() error", err);
  // } finally {
  //   if (conn) {
  //     try {
  //       await conn.close();
  //     } catch (err) {
  //       console.error('Error in closing:\n', err.message);
  //     }
  //   }
  // }
}


const handleError = async (res, text, err) => {
  if (err) {
    text += ": " + err.message;
  }
  console.error(text);
  response.writeHead(500, {"Content-Type": "text/html"});
  response.write(text);
  response.end();
}


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

init();