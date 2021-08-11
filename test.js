const { intergrationRun } = require('./db');

intergrationRun().then(result => {
  console.log(result);
});

// const aTable = 'SOUND';

// const sql = `INSERT INTO ${aTable} VALUES (${aTable}_seq.NEXTVAL, :DATA, SYSDATE)`;

// console.log(sql);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = arr.reduce((accu, curr) => accu + curr);

// console.log(sum);

// const obj = {
//   name: 1,
//   no: 2,
// }

// console.log(obj);

// obj['ok'] = 'okok';

// console.log(obj);