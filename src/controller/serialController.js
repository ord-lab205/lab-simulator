const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const oracleController = require('./oracleController');

const serialController = {
  SerialPort: SerialPort,

  Readline: Readline,

  oracleController = oracleController,

  _fn_findArduino: async function () {
    if (process.argv[2]) return process.argv[2];

    // 각 포트에서 아두이노에 해당하면 반환
    const ports = await this.SerialPort.list();
    for (const port of ports) {
      if (/arduino/i.test(port.manufacturer)) {
        return port.path;
      }
    }
    throw new Error('No arduinos found.');
  },

  _fn_insertArduinoData: async function () {
    await this._fn_findArduino().then(path => {
      const port = new this.SerialPort(path, { baudRate: 9600 });
      const parser = port.pipe(new this.Readline({ delimiter: '\r\n' }));

      // Error, Open 이벤트 처리
      port.on('error', err => err ? console.error(`Error on write:\n${err}`) : console.log('Message written.'));
      port.once('open', async () => {
        console.log(`Opened serial:\n${path}`);

        // 발생하는 스트림 데이터 배열에 추가
        const arr = [];
        parser.on('data', data => {
          arr.push(data);
        })

        // 일정 시간마다 스트림 데이터 연산 후 평균 값과 데이터 개수를 테이블에 삽입
        setInterval(async () => {
          const table = '';
          const len = arr.length;
          const value = arr.reduce((a, b) => a + b, 0) / len;
          await this.oracleController._fn_insertIntoSensor(table, value, len);
        })
      }, () => console.log('No arudino.'));
    })
  }
}

(async () => {
  await serialController._fn_insertArduinoData();
})();

module.exports = serialController;