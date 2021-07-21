const oracledb = require('oracledb');

const dbconfig = require('./dbconfig.json');

oracledb.getConnection(dbconfig, (err, conn) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connected oracleDB.');
});