const { selectRun } = require('./db');

const ok = selectRun('intergrated_sensor');

console.log(ok.then(result => console.log(result)));