const process = require("process");
const path = require("path");
require("dotenv").config({
  path: path.resolve(
    __dirname,
    process.env.NODE_ENV === "production" ? ".env" : ".env.dev"
  ),
});

const { config__server_info, server_url } = require("./config/server_info");

(async (process) => {
  const db = require("./db/index");
  await db.fn_connection__xe();

  const app = require("./app");
  app.listen(config__server_info.PORT);
  console.log(server_url);

  process
    .once("SIGTERM", db.fn_oper__at_termination)
    .once("SIGINT", db.fn_oper__at_termination);
})(process);
