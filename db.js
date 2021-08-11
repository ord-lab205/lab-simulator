const oracledb = require('oracledb');
const config = require('./config/oracle');
const demoSetup = require('./demosetup');
const { allSensorsAverage } = require('./statements');

// 데이터 베이스 초기화
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

    // 특정 테이블을 ROW의 순서대로 역정렬하고 첫번째 ROW를 SELECT
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

    // 각 센서 테이블의 값을 통합해서 가져옴
    let sql = allSensorsAverage,
        options = { outFormat: oracledb.OUT_FORMAT_OBJECT };

    const result = await conn.execute(sql, {}, options);
    const row = result.rows[0];

    // 수치가 기준을 초과하는 필드 이름 추출(위험 요소)
    const factors = Object.keys(row).filter(s => row[s] > 80);

    // RISK 필드와 DETAIL 필드 내용 추가
    row.risk = factors.length === 0 ? 0 : 1;
    row.detail = factors.toString();

    // intergrated_sensor 테이블에 INSERT
    sql = `INSERT INTO intergrated_sensor
           VALUES (intergrated_sensor_seq.nextval, :1, :2, :3, :4, :5, :6, :7, :8, sysdate)`,
    bindParams = Object.values(row);
    options = {
      autoCommit: true,
      bindDefs: {
        1: { type: oracledb.DB_TYPE_NUMBER },
        2: { type: oracledb.DB_TYPE_NUMBER },
        3: { type: oracledb.DB_TYPE_NUMBER },
        4: { type: oracledb.DB_TYPE_NUMBER },
        5: { type: oracledb.DB_TYPE_NUMBER },
        6: { type: oracledb.DB_TYPE_NUMBER },
        7: { type: oracledb.DB_TYPE_VARCHAR },
        8: { type: oracledb.DB_TYPE_VARCHAR },
      },
    }

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


const insertRun = async (aTable, value) => {
  let conn;

  try {
    conn = await oracledb.getConnection(config);

    const sql = `INSERT INTO ${aTable} VALUES (${aTable}_seq.NEXTVAL, :DATA, SYSDATE)`,
          bindParams = [value],
          options = {
            autoCommit: true,
            bindDefs: {
              DATA: { type: oracledb.DB_TYPE_NUMBER }
            },
            // outFormat: oracledb.OUT_FORMAT_OBJECT
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

