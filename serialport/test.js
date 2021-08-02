const SerialPort = require('@serialport/stream'),
      Binding = require('@serialport/bindings');
      parser = require('./lib/parsers');

SerialPort.Binding = Binding;
SerialPort.parser = parser;

module.exports = SerialPort;