// 모듈
// 모드에 따른 환경변수
const process = require("process");
const path = require("path");
require("dotenv").config({
  path: path.resolve(
    __dirname,
    process.env.NODE_ENV === "production" ? ".env" : ".env.dev"
  ),
});
const express = require("express");
const app = express();

// 컨텍스트

// 미들웨어: 라우팅, 정적 파일 처리
app.use(require("./api/index"));
app.use(express.static(path.join(__dirname, "public")));
console.log("OKOK");

// 미들웨어: 에러 처리
app.use((req, res, next) => {
  next(createError(404));
});
app.use((err, req, res, next) => {
  res.status(err.status || 500).end("error") ;
});

module.exports = app;
