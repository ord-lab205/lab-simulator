const oracledb = require("oracledb");
const config__oracle_info = require("../config/oracle_info").config__oracle_info;

const STR__DB_ORACLE__XE__TABLE_GENERAL = process.env.DB_ORACLE__XE__TABLE_GENERAL;

const STR__SUBSCRIPTION_NAME = process.env.DB_ORACLE__XE__SUBSCRIPTION_NAME;
const STR__SUBSCRIPTION_QUERY = `SELECT * FROM ${STR__DB_ORACLE__XE__TABLE_GENERAL} WHERE ROWNUM=1`;

module.exports = {
  async fn_connection__xe() {
    await oracledb.createPool(config__oracle_info);
    this.conn = await oracledb.getConnection();
  },

  fn_oper__at_termination() {
    try {
      if (this.conn) {
        conn.close().then(() => {
          oracledb.getPool().close(10);
          process.exit(0);
        })
      }
    } catch (err) {
      console.error(`Error: db/index.js - fn_oper__at_termination\n${err}`);
      process.exit(1);
    }
  },

  fn_subscription__db_table(res) {
    const options = {
      sql: STR__SUBSCRIPTION_QUERY,
      callback: () => {
        const opts_query = { type: oracledb.OUT_FORMAT_OBJECT }
        this.conn.execute(STR__SUBSCRIPTION_QUERY, [], opts_query).then(arr_result => {
          const obj_a_row = arr_result.row[0];
          res.write(`data: ${obj_a_row}\n\n`);
          console.log("Success: /db/index.js - fn_subscription__db_table (conn.subscribe)");
        }).catch((err) => {
          console.error(`Fail: /db/index.js - fn_subscription__db_table (conn.subscribe)\n${err}`);
        });
      },
    };
  
    this.conn.subscribe(STR__SUBSCRIPTION_NAME, options);  
  },

  fn_unsubscription__db_table() {
    conn.unsubscribe(STR__SUBSCRIPTION_NAME).then(() => {
      console.log("Success: /db/index.js - fn_unsubscription__db_table (conn.unsubcribe)");
    }).catch(err => {
      console.error(`Fail: /db/index.js - fn_unsubscription__db_table (conn.unsubcribe)\n${err}`);
    });
  },
};