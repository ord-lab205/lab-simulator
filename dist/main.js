/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./api/get.js":
/*!********************!*\
  !*** ./api/get.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const router = (__webpack_require__(/*! express */ \"express\").Router)();\r\nconst service_sse = __webpack_require__(/*! ../services/sse */ \"./services/sse.js\");\r\n\r\nrouter.get(\"/sse\", service_sse);\r\n\r\nmodule.exports = router;\r\n\n\n//# sourceURL=webpack://ord-lab-205-monitoring-web-app/./api/get.js?");

/***/ }),

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const router = (__webpack_require__(/*! express */ \"express\").Router)();\r\n\r\nconst router__REST_GET = __webpack_require__(/*! ./get */ \"./api/get.js\");\r\n\r\nrouter.use(router__REST_GET);\r\n\r\nmodule.exports = router;\r\n\n\n//# sourceURL=webpack://ord-lab-205-monitoring-web-app/./api/index.js?");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 모듈\r\n// 모드에 따른 환경변수\r\nconst process = __webpack_require__(/*! process */ \"process\");\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)({\r\n  path: path.resolve(\r\n    __dirname,\r\n    process.env.NODE_ENV === \"production\" ? \".env\" : \".env.dev\"\r\n  ),\r\n});\r\nconst express = __webpack_require__(/*! express */ \"express\");\r\nconst app = express();\r\n\r\n// 컨텍스트\r\n\r\n// 미들웨어: 라우팅, 정적 파일 처리\r\napp.use(__webpack_require__(/*! ./api/index */ \"./api/index.js\"));\r\napp.use(express.static(path.join(__dirname, \"public\")));\r\nconsole.log(\"OKOK\");\r\n\r\n// 미들웨어: 에러 처리\r\napp.use((req, res, next) => {\r\n  next(createError(404));\r\n});\r\napp.use((err, req, res, next) => {\r\n  res.status(err.status || 500).end(\"error\") ;\r\n});\r\n\r\nmodule.exports = app;\r\n\n\n//# sourceURL=webpack://ord-lab-205-monitoring-web-app/./app.js?");

/***/ }),

/***/ "./config/oracle_info.js":
/*!*******************************!*\
  !*** ./config/oracle_info.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.config__oracle_info = {\r\n  user: process.env.DB_ORACLE__XE__USER,\r\n  password: process.env.DB_ORACLE__XE__PASSWORD,\r\n  connectString: process.env.DB_ORACLE__XE__CONNECTIONSTRING,\r\n  events: true,\r\n};\r\n\n\n//# sourceURL=webpack://ord-lab-205-monitoring-web-app/./config/oracle_info.js?");

/***/ }),

/***/ "./config/server_info.js":
/*!*******************************!*\
  !*** ./config/server_info.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("const SCHEME = process.env.SCHEME || \"http\";\r\nconst HOST = process.env.HOST || \"localhost\";\r\nconst PORT = process.env.PORT || 8080;\r\n\r\nexports.config__server_info = {\r\n  SCHEME,\r\n  HOST,\r\n  PORT,\r\n};\r\n\r\nexports.server_url = `${SCHEME}://${HOST}:${PORT}/`;\r\n\n\n//# sourceURL=webpack://ord-lab-205-monitoring-web-app/./config/server_info.js?");

/***/ }),

/***/ "./db/index.js":
/*!*********************!*\
  !*** ./db/index.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const oracledb = __webpack_require__(/*! oracledb */ \"oracledb\");\r\nconst config__oracle_info = (__webpack_require__(/*! ../config/oracle_info */ \"./config/oracle_info.js\").config__oracle_info);\r\n\r\nconst STR__DB_ORACLE__XE__TABLE_GENERAL = process.env.DB_ORACLE__XE__TABLE_GENERAL;\r\n\r\nconst STR__SUBSCRIPTION_NAME = process.env.DB_ORACLE__XE__SUBSCRIPTION_NAME;\r\nconst STR__SUBSCRIPTION_QUERY = `SELECT * FROM ${STR__DB_ORACLE__XE__TABLE_GENERAL} WHERE ROWNUM=1`;\r\n\r\nmodule.exports = {\r\n  async fn_connection__xe() {\r\n    await oracledb.createPool(config__oracle_info);\r\n    this.conn = await oracledb.getConnection();\r\n  },\r\n\r\n  fn_oper__at_termination() {\r\n    try {\r\n      if (this.conn) {\r\n        conn.close().then(() => {\r\n          oracledb.getPool().close(10);\r\n          process.exit(0);\r\n        })\r\n      }\r\n    } catch (err) {\r\n      console.error(`Error: db/index.js - fn_oper__at_termination\\n${err}`);\r\n      process.exit(1);\r\n    }\r\n  },\r\n\r\n  fn_subscription__db_table(res) {\r\n    const options = {\r\n      sql: STR__SUBSCRIPTION_QUERY,\r\n      callback: () => {\r\n        const opts_query = { type: oracledb.OUT_FORMAT_OBJECT }\r\n        this.conn.execute(STR__SUBSCRIPTION_QUERY, [], opts_query).then(arr_result => {\r\n          const obj_a_row = arr_result.row[0];\r\n          res.write(`data: ${obj_a_row}\\n\\n`);\r\n          console.log(\"Success: /db/index.js - fn_subscription__db_table (conn.subscribe)\");\r\n        }).catch((err) => {\r\n          console.error(`Fail: /db/index.js - fn_subscription__db_table (conn.subscribe)\\n${err}`);\r\n        });\r\n      },\r\n    };\r\n  \r\n    this.conn.subscribe(STR__SUBSCRIPTION_NAME, options);  \r\n  },\r\n\r\n  fn_unsubscription__db_table() {\r\n    conn.unsubscribe(STR__SUBSCRIPTION_NAME).then(() => {\r\n      console.log(\"Success: /db/index.js - fn_unsubscription__db_table (conn.unsubcribe)\");\r\n    }).catch(err => {\r\n      console.error(`Fail: /db/index.js - fn_unsubscription__db_table (conn.unsubcribe)\\n${err}`);\r\n    });\r\n  },\r\n};\n\n//# sourceURL=webpack://ord-lab-205-monitoring-web-app/./db/index.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const process = __webpack_require__(/*! process */ \"process\");\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)({\r\n  path: path.resolve(\r\n    __dirname,\r\n    process.env.NODE_ENV === \"production\" ? \".env\" : \".env.dev\"\r\n  ),\r\n});\r\n\r\nconst { config__server_info, server_url } = __webpack_require__(/*! ./config/server_info */ \"./config/server_info.js\");\r\n\r\n(async (process) => {\r\n  const db = __webpack_require__(/*! ./db/index */ \"./db/index.js\");\r\n  await db.fn_connection__xe();\r\n\r\n  const app = __webpack_require__(/*! ./app */ \"./app.js\");\r\n  app.listen(config__server_info.PORT);\r\n  console.log(server_url);\r\n\r\n  process\r\n    .once(\"SIGTERM\", db.fn_oper__at_termination)\r\n    .once(\"SIGINT\", db.fn_oper__at_termination);\r\n})(process);\r\n\n\n//# sourceURL=webpack://ord-lab-205-monitoring-web-app/./index.js?");

/***/ }),

/***/ "./services/sse.js":
/*!*************************!*\
  !*** ./services/sse.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\r\n  fn_subscription__db_table,\r\n  fn_unsubscription__db_table,\r\n} = __webpack_require__(/*! ../db/index */ \"./db/index.js\");\r\n\r\nmodule.exports = (req, res) => {\r\n  res.setHeader(\"Content-type\", \"text/event-stream\");\r\n\r\n  fn_subscription__db_table(res).catch((err) => {\r\n    console.error(`/api/get.js - fn_REST_GET__connect_SSE (fn_subscription__db_table)\\n${err}`);\r\n  });\r\n\r\n  setTimeout(() => {\r\n    fn_unsubscription__db_table().catch((err) => {\r\n      console.error(`/api/get.js - fn_REST_GET__connect_SSE (fn_unsubscription__db_table)\\n${err}`);\r\n    });\r\n  }, 1000 * 15);\r\n};\r\n\n\n//# sourceURL=webpack://ord-lab-205-monitoring-web-app/./services/sse.js?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "oracledb":
/*!***************************!*\
  !*** external "oracledb" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("oracledb");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;