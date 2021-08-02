const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('COM9', {
  baudRate: 9600
})

port.on('error', err => {
  if (err) {
    return console.log('Error on write: ', err.message);
  }
  console.log('Message written.');
})

port.on('open', () => {
  console.log('ok.');
})

const parser = port.pipe(new Readline({ delimiter: '\r\n' }))

module.exports = parser;