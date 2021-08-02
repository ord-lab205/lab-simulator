const SerialPort = require('serialport');
const soundA = require('./sound_a');

// 컴퓨터에서 아두이노 찾기
const findArduino = async () => {
  if (process.argv[2]) return process.argv[2];

  // 각 포트에서 아두이노에 해당하면 반환
  const ports = await SerialPort.list();
  for (const port of ports) {
    if (/arduino/i.test(port.manufacturer)) {
      return port.path;
    }
  }
  throw new Error('No arduinos found.');
}

// 아두이노를 찾고 동작
findArduino().then(path => {
  const port = new SerialPort(path, { baudRate: 9600 });

  // Error 이벤트 처리
  port.on('error', err => {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('Message written.');
  });

  // Open 이벤트 처리
  port.on('open', () => {
    console.log('Opened serial', path);
    soundA(port);
  })
}, () => console.log('No arudino.'));

process.on('unhandledRejection', r => console.log(r, r.stack))