const testController = {
  makeStmtOfCreate: (table, columns) => {
    let stmt = `CREATE TABLE ${table}(`;

    if (typeof columns === 'string' && !Array.isArray(columns)) {
      return stmt + `${columns})`;
    }

    let stmt = `CREATE TABLE ${table}(`;
    while (columns[0]) {
      stmt += `${columns.shift()} ${types.shift()} ${constraints.shift() || ''},`;
    }
    return stmt.slice(0, -1) + ')';
  }
};

(async () => {
  // const table = 'OK',
  //       columns = ['sound_sensor_a', 'sound_sensor_b', 'sound_sensor_c', 'vibration_sensor_a', 'vibration_sensor_b', 'vibration_sensor_c'],
  //       types = ['NUMBER', 'NUMBER', 'NUMBER', 'NUMBER', 'NUMBER', 'NUMBER'],
  //       constraints = ['PRIMARY KEY'];
  // const stmt = testController.makeStmtOfCreate(table, columns, types, constraints);
  // console.log(stmt);

  // const arr = [1,2];

  // console.log(typeof arr)

  const obj = {
    a: 'ok', b: 'pe',
  }

  const map = new Map();
})(); 