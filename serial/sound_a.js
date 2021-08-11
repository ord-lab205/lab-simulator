const Readline = require('@serialport/parser-readline');

const { insertRun } = require('../db');

module.exports = port => {
  const parser = port.pipe(new Readline({ delimiter: '\r\n' }));
  parser.on('data', data => insertRun('sound_sensor_a', data));

  // 배열에 추가하여 연산 후 테이블에 튜플을 추가하는 방법이 있으나,
  // 현재 설계한 DB 처리 구성이 있으므로 나중에 작성할 것.
  // const arr = [];
  
  // parser.on('data', data => {
  //   arr.push(data);
  // });

  // setInterval(() => {
  //   const avg = arr.reduce((accu, curr) => accu + curr) / arr.length;
  //   insertRun('sound_sensor_a', avg);
  // }, 2000)
}