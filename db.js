const oracledb = require('oracledb');

const dbconfig = require('./dbconfig.json');

oracledb.getConnection(dbconfig, (err, conn) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connected oracleDB.');

  const sql = 'select * from anyT';
  const bindParams = {};
  const options = { outFormat: oracledb.OBJECT };

  conn.execute(sql, bindParams, options, (err, result) => {
    if (err) throw err;
    console.log('Query read success.');
    
    console.log('result: ', result);

    dataStr = JSON.stringify(result);
    console.log('dataStr: ', dataStr);

    arrStr = JSON.stringify(result.rows);
    console.log('arrStr: ', arrStr);

    const arr = JSON.parse(arrStr);
    console.log('arr:', arr);
  })
});