const oracledb = require('oracledb');
const config = require('../config/oracle');
const demoSetup = require('../../demosetup');
const { allSensorsAverage, allSensorsTruncate } = require('../sql');

const oracleController = {
  oracledb: oracledb,

  config: config,

  demoSetup: demoSetup,

  _fn_closePoolAndExit: async () => {
    console.log("\nTerminating");
    try {
      await oracledb.getPool().close(10);
      console.log("Pool closed");
      process.exit(0);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  },

  _fn_closeConnection: async conn => {
    if (conn) {
      try {
        await conn.close();
      } catch (err) {
        console.error(`Error in closing connection:\n${err}`);
      }
    }
  },

  _fn_createPool: async function () {
    let conn;
    try {
      await this.oracledb.createPool(this.config);

      await Promise.all([this.demoSetup.setupSD(conn), this.demoSetup.setupVB(conn), this.demoSetup.setupIS(conn)])
            .catch(err => console.error(`Error in Promise.all:\n${err.message}`));

      conn = await this.oracledb.getConnection();

    } catch (err) {
      console.error(`Error in _fn_createPool:\n${err}`);
    } finally {
      this._fn_closeConnection(conn);
    }
  },

  _fn_selectSensors: async function (table) {
    let conn;
    try {
      conn = await this.oracledb.getConnection();

      const query = `SELECT * FROM (SELECT * FROM ${table} ORDER BY ROWNUM DESC) WHERE ROWNUM = 1`;
      const bindParams = {},
      const options = { outFormat: oracledb.OUT_FORMAT_OBJECT };

      const result = await conn.execute(sql, bindParams, options);

      return result.rows[0];
    } catch (err) {
      console.error(`Error in _fn_selectSensors:\n${err}`);
    } finally {
      this._fn_closeConnection(conn);
    }
  },

  _fn_insertIntoSensor: async function (table, value, len) {
    let conn;
    try {
      conn = await this.oracledb.getConnection();

      const query = `INSERT INTO ${table} VALUES (${table}_seq.NEXTVAL, :1, :2, SYSDATE)`
      const bindParams = [value, len];
      const options = {
        autoCommit: true,
        bindDefs: {
          1: { type: this.oracledb.DB_TYPE_NUMBER },
          2: { type: this.oracledb.DB_TYPE_NUMBER },
        }
      };

      await conn.execute(query, bindParams, options);
    } catch (err) {
      console.error(`Error in _fn_insertIntoSensor:\n${err}`);
    } finally {
      this._fn_closeConnection(conn);
    }
  },

  _fn_insertIntoSensors: async function (table, row) {
    let conn;
    try {
      conn = await this.oracledb.getConnection();

      const query = `INSERT INTO ${table} VALUES (${table}_seq.NEXTVAL, :1, :2, :3, :4, :5, :6, :7, :8, SYSDATE)`;
      const bindParams = Object.values(row);
      const options = {
        autoCommit: true,
        bindDefs: {
          1: { type: this.oracledb.DB_TYPE_NUMBER },
          2: { type: this.oracledb.DB_TYPE_NUMBER },
          3: { type: this.oracledb.DB_TYPE_NUMBER },
          4: { type: this.oracledb.DB_TYPE_NUMBER },
          5: { type: this.oracledb.DB_TYPE_NUMBER },
          6: { type: this.oracledb.DB_TYPE_NUMBER },
          7: { type: this.oracledb.DB_TYPE_VARCHAR },
          8: { type: this.oracledb.DB_TYPE_VARCHAR },
        }
      };

      await conn.execute(query, bindParams, optinos);
    } catch (err) {
      console.error(`Error in _fn_insertIntoSensors:\n${err}`);
    } finally {
      this._fn_closeConnection(conn);
    }
  },

  _fn_truncateSensors: async function (table) {
    let conn;
    try {
      conn = await this.oracledb.getConnection();

      for (const stmt of stmts) await conn.execute(stmt);
    } catch (err) {
      console.error(`Error in _fn_truncateSensors:\n${err}`);
    }
  }
}

(async () => {
  await oracleController._fn_createPool();
})();

module.exports = oracleController;