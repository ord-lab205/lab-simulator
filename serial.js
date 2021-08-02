const SerialPort = require('serialport');

SerialPort.list().then(ports => {
  const port = ports.find(port => /arduino/i.test(port.manufacturer))
  if (!port) {
    console.error('Arduino Not found')
    process.exit(1)
  }
  console.log(port)
})