const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const Delimiter = require('@serialport/parser-delimiter')
const port = new SerialPort('COM9', {
  baudRate: 9600
})

const parser = port.pipe(new Delimiter({ delimiter: '\n' }))
parser.on('data', console.log) // emits data after every '\n'