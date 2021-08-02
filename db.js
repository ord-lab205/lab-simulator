const oracledb = require('oracledb');
const dbConfig = require('./dbconfig');
const demoSetup = require('./demosetup');

const selectRun = async aTable => {
  let conn;

  try {
    conn = await oracledb.getConnection(dbConfig);

    const sql = 'SELECT * FROM ' + aTable,
          bindParams = {},
          options = { outFormat: oracledb.OUT_FORMAT_OBJECT }; // oracledb.OBJECT are deprecated but still usable.

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

const insertRun = async (aTable, value) => {
  let conn;

  try {
    conn = await oracledb.getConnection(dbConfig);

    const sql = 'INSERT INTO ' + aTable + ' VALUES (anyT_seq.NEXTVAL, :NAME)',
          bindParams = [value],
          options = {
            autoCommit: true,
            bindDefs: {
              NAME: { type: oracledb.DB_TYPE_VARCHAR }
            },
            outFormat: oracledb.OUT_FORMAT_OBJECT
          };

    await conn.execute(sql, bindParams, options);
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
exports.insertRun = insertRun;

