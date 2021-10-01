const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');


const obj_controller__oracle = require('./oracle_controller');


const obj_controller__serial = {
  name__context_obj: 'obj_controller__serial',

  fn_find__port__arduino: async function() {
    'use strict';
    try {
      if (process.argv[2]) {
        return process.argv[2];
      }

      const arr_ports = await SerialPort.list();
      for (const port of arr_ports) {
        if (/arduino/i.test(port.manufacturer)) {
          this.path = port.path;
          return;
        }
      }
      throw new Error('No arduino found.');
    } catch (err) {
      console.error(`Error in 'obj_controller__serial.fn_find__port__arduino':\n${err}`);
    }
  },

  fn_calc__stream_data: async function (_arr) {
    return {
      val__max: Math.max(..._arr),
      val__min: Math.min(..._arr),
      val__avg: _arr.reduce((a, b) => a + b) / _arr.length,
    }
  },

  fn_handle__stream: async function () {
    'use strict';
    if (this.path) {
      const name__fn = 'fn_handle__stream';
      const obj_options = { baudRate: 9600 };
      const curr_port = new SerialPort(this.path, obj_options);

      curr_port.on('error', err => console.error(`Error:\n${__filename}\n${this.name__context_obj}.${name__fn}\n${err}`));
      curr_port.on('open', () => {
        const parser = curr_port.pipe(new Readline({ delimiter: '\r\n' }));

        const arr_stream_data = [];
        parser.on('data', _d => arr_stream_data.push(_d));

        setInterval(async () => {
          if (arr_stream_data.length !== 0) {
            const obj_calc__stream_data = this.fn_calc__stream_data(arr_stream_data);
            await obj_controller__oracle.fn_oper__dml_insert(obj_calc__stream_data);
          }
        }, 2000);
      });
    }
  },

  fn_oper__at_termination: function () {

  },
}

module.exports = obj_controller__serial;