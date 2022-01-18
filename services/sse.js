const {
  fn_subscription__db_table,
  fn_unsubscription__db_table,
} = require("../db/index");

module.exports = (req, res) => {
  res.setHeader("Content-type", "text/event-stream");

  fn_subscription__db_table(res).catch((err) => {
    console.error(`/api/get.js - fn_REST_GET__connect_SSE (fn_subscription__db_table)\n${err}`);
  });

  setTimeout(() => {
    fn_unsubscription__db_table().catch((err) => {
      console.error(`/api/get.js - fn_REST_GET__connect_SSE (fn_unsubscription__db_table)\n${err}`);
    });
  }, 1000 * 15);
};
