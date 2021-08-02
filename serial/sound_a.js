const Readline = require('@serialport/parser-readline');

module.exports = port => {
  const parser = port.pipe(new Readline({ delimiter: '\r\n' }))
  parser.on('data', data => console.log('Data:', data));
}