"use strict";

const oracledb = require('oracledb');
const oracleConfig = require('../config/oracle');

const oracleCtrl = {
  fnOperInAdvace: async function()
  {
    await this.fnCreatePool();
    await this.fnGetConnect();
  },
  fnCreatePool: async function()
  {
    await oracledb.createPool(oracleConfig/* :object */);
  },
  fnGetConnect: async function()
  {
    this.conn = await oracledb.getConnection();
  },
  fnSubscribeTable: async function(res)
  {
    const tabName = 'sec_show';
    const subName = 'sub_t_sec_show';
    const subOpts = {
      sql: `SELECT * FROM ${tabName}`,
      callback: msg => {
        console.log('change');
        this.fnDMLSelectRow().then(objRst => res.write(`data: ${objRst}\n\n`));
      }, 
    };
    await this.conn.subscribe(subName, subOpts);
  },
  fnUnsubscribeTable: async function()
  {
    const subName = 'sub_t_sec_show';
    await this.conn.unsubscribe(subName);
  },
  fnDMLSelectRow: async function(_sec=''/* :string */) /* :array */
  {
    const q = `SELECT * FROM sec_show`;
    const qOpts = {
      type: oracledb.OUT_FORMAT_OBJECT,
    };
    const objRst = await this.conn.execute(q, [], qOpts);
    return objRst.rows[0];
  },
  fnCloseConn: async function()
  {
    if (this.conn) {
      await this.conn.close();
    }
  },
  fnOperAtTermination: async function()
  {
    try {
      await this.fnCloseConn();
      await oracledb.getPool().close(10);
      process.exit(0);
    } catch (err) {
      process.exit(1);
    }
  },
};

module.exports = oracleCtrl;