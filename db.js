const oracledb = require('oracledb');
const config = require('./dbconfig');
const demoSetup = require('./demosetup');
const { intergrationSensors: stmts } = require('./statements');

const init = async () => {
  let conn;
  try {
    // Pool
    await oracledb.createPool(config);

    // getConnection: Setup tables.
    conn = await oracledb.getConnection();
    await demoSetup.setupSD(conn);
    await demoSetup.setupVB(conn);
    await demoSetup.setupIS(conn);
  } catch (err) {
    console.log('Error in processing:\n', err.message);
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

const selectRun = async aTable => {
  let conn;

  try {
    conn = await oracledb.getConnection(config);

    const sql = `SELECT * FROM (SELECT * FROM ${aTable} ORDER BY ROWNUM DESC) WHERE ROWNUM = 1`,
          bindParams = {},
          options = { outFormat: oracledb.OUT_FORMAT_OBJECT }; // oracledb.OBJECT are deprecated but still usable.

    const result = await conn.execute(sql, bindParams, options);

    return result.rows[0];

  } catch (err) {
    console.error('*Error in processing.\n', err.message);
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


const intergrationRun = async () => {
  let conn;

  try {
    conn = await oracledb.getConnection(config);

    for (const s of stmts) {
      try {
        await conn.execute(s);
      } catch (err) {
        if (err.errorNum != 942) throw (err);
      }
    }
    await conn.commit();

    const sql = 'SELECT * FROM tmp_all_sensor',
          bindParams = {},
          options = {outFormat: oracledb.OUT_FORMAT_OBJECT };

    const result = await conn.execute(sql, bindParams, options);
    const row = result.rows[0];

    return Object.keys(row).filter(s => row[s] > 80);

  } catch (err) {
    console.error('*Error in processing.\n', err.message);
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
    conn = await oracledb.getConnection(config);

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
    console.error('*Error in processing.\n', err.message);
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

module.exports = { init, selectRun, intergrationRun, insertRun };

