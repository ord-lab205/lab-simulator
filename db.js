const oracledb = require('oracledb');

const config = require('./dbConfig');

const selectRun = async aTable => {
  let conn;

  try {
    conn = await oracledb.getConnection(config);

    const sql = 'SELECT * FROM ' + aTable,
          bindParams = {},
          options = { outFormat: oracledb.OBJECT };

    const result = await conn.execute(sql, bindParams, options);
    
    console.log(result.rows);
  } catch (err) {
    console.log('*Error in processing.\n', err.message);
  } finally {
    if (conn) {
      try {
        await conn.close();
      } catch (err) {
        console.log('*Error in closing connection.\n', err.message);
      }
    }
  }
}

exports.selectRun = selectRun;

