const { selectRun, intergrationRun } = require('./db');
const { intergrationSensors: stmts } = require('./statements');

// const ok = selectRun('intergrated_sensor');

// console.log(ok.then(result => console.log(result)));

const ok = intergrationRun();

ok.then(result => console.log(result));

// for (const s of stmts) {
//   console.log(s);
// }