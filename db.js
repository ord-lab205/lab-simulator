const oracledb = require('oracledb');

const dbconfig = require('./dbConfig');

const run = async () => {
  let conn;

  try {
    conn = await oracledb.getConnection(dbconfig);

    console.log('***Connected to OracleDB:');

    const selectTable = () => {
      const sql = 'select * from anyT';
      const bindParams = {};
      const options = { outFormat: oracledb.OBJECT };
      
      conn.execute(sql, bindParams, options, (err, result) => {
        const arrStr = JSON.stringify(result.rows);
        console.log(arrStr);
        const arr = JSON.parse(arrStr); // (=result.rows)
        console.log(arr);
      });
    }

    selectTable();

  } catch(err) {
    console.log('***Error in processing:\n', err);
  } finally {
    if (conn) {
      try {
        await conn.close();
      } catch(err) {
        console.log('Error in closing connection:\n', err);
      }
    }
  }
}

run();

//----- Serialprot -----//

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const port = new SerialPort('/dev/tty-usbserial1', {
  baudRate: 57900
});

const parser = new Readline();

port.write('Main screen turn on', err => {
  if (err) {
    return console.log('Error on write: \n', err.message);
  }
  console.log('Message written.');
});

port.on('error', err => {
  if (err) {
    return console.log('Error on write: ', err.message);
  }
  console.log('Message written.');
})

port.on('open', () => {
  // open logic.
})

port.on('readable', () => {
  console.log('Data', port.read);
})

port.on('data', data => {
  console.log('Data', data);
})

const lineStream = port.pipe(new Readline());

