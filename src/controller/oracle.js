const oracledb = require('oracledb');
const obj__oracle_config = require('../config/oracle');

module.exports = {
  name__context_object: 'obj__oracle_controller',

  fn_oper__in_advance: async function () {
    try {
      await oracledb.createPool(obj__oracle_config);
      this.conn = await oracledb.getConnection();
    } catch (err) {
      const name__fn = 'fn_oper__in_advance';
      console.error(`Error:\n${__filename}\n${this.name__context_obj}.${name__fn}\n${err}`);
    }
  },

  fn_dml_select__a_row: async function () {
    'use strict';
    try {
      const name__t_logging = 't_logging__intergrated_node';

      const q = `SELECT * FROM ${name__t_logging}`;
      const obj_options = { type: oracledb.OUT_FORMAT_OBJECT };

      const result = await this.conn.execute(q, [], obj_options);
      return result.rows[0];
    } catch (err) {
      const name__fn = 'fn_dml_select__a_row';
      console.error(`Error:\n${__filename}\n${this.name__context_obj}.${name__fn}\n${err}`);
    }
  },

  fn_close__conn: async function () {
    if (this.conn) {
      try {
        await this.conn.close();
      } catch (err) {
        const name__fn = 'fn_close__conn';
        console.error(`Error:\n${__filename}\n${this.name__context_obj}.${name__fn}\n${err}`);
      }
    }
  },

  fn_oper__at_termination: async function () {
    try {
      await oracledb.getPool().close(10);
      process.exit(0);
    } catch (err) {
      const name__fn = 'fn_oper__at_termination';
      console.error(`Error:\n${__filename}\n${this.name__context_obj}.${name__fn}\n${err}`);
      process.exit(1);
    }
  }
}