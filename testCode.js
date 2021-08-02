const SerialPort = require('serialport');

async function findArduino() {
  if (process.argv[2]) {
    return process.argv[2]
  }
  const ports = await SerialPort.list()
  for (const port of ports) {
    if (/arduino/i.test(port.manufacturer)) {
      return port.path
    }
  }
  throw new Error('No arduinos found')
}

findArduino().then(portName => {
  const port = new SerialPort(portName, { baudRate: 9600 });
  port.on('error', err => console.error(err.message));
  port.on('data', data => console.log('data:', data.toString()));
  setTimeout(() => {
    console.log('closing.');
    port.close();
  }, 5000);
})

process.on('unhandledRejection', r => console.log(r, r.stack))