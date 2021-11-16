const express = require('express');
const oracleCtrl = require('../controller/oracle');

const Router = express.Router(); 

Router.get('/:ef/sse', async (req, res) => await fnRouterGetEnvFactorSSE(req, res));

module.exports = Router;


async function fnRouterGetEnvFactorSSE(req, res)
{
  res.setHeader('Content-Type', 'text/event-stream');
  await fnSendStream(res, req.params.ef);
}


async function fnSendStream(res, ef)
{
  const efList = ['animals', 'bridge', 'general', 'index', 'tunnel'];
  const idxOfEf = efList.findIndex(el => el === ef);
  const tabName = 'sec_show';
  await oracleCtrl.fnSubscribeTable(res);
  setTimeout(async () => await oracleCtrl.fnUnsubscribeTable(), 1000 * 10);
}