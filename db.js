const oracledb = require('oracledb');

const dbconfig = require('./dbconfig.json');

const run = async () => {
  let conn;

  try {
    conn = await oracledb.getConnection(dbconfig);

    console.log('***Connected to OracleDB:');

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
  } catch(err) {
    console.log('***Error in processing:\n', err);
  } finally {
    if (conn) {
      try {
        await conn.close();
      } catch(err) {
        console.log('Error in closing connection:\n', err);
      }
    }
  }
}

run();