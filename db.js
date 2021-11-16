const oracleCtrl = require('./controller/oracle');

module.exports = (async function()
{
  await oracleCtrl.fnOperInAdvace();
  process
    .once('SIGTERM', oracleCtrl.fnOperAtTermination)
    .once('SIGINT', oracleCtrl.fnOperAtTermination);
})();