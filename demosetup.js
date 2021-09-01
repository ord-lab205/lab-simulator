const stmts = require('./src/sql');

const setupSD = async conn => {
  const SD = stmts.SD;
  try {
    for (const s of SD) {
      try {
        await conn.execute(s);
      } catch (err) {
        if (err.errorNum != 942) throw (err);
      }
    }
    await conn.commit();

  } catch (err) {
    console.error('Error in setupSD:\n', err.message);
  }
}


const setupVB = async conn => {
  const VB = stmts.VB;
  try {
    for (const s of VB) {
      try {
        await conn.execute(s);
      } catch (err) {
        if (err.errorNum != 942) throw (err);
      }
    }
    await conn.commit();

  } catch (err) {
    console.error('Error in setupVB:\n', err.message);
  }
}


const setupIS = async conn => {
  const IS = stmts.IS;
  try {
    for (const s of IS) {
      try {
        await conn.execute(s);
      } catch (err) {
        if (err.errorNum != 942) throw (err);
      }
    }
    await conn.commit();

  } catch (err) {
    console.error('Error in setupIS:\n', err.message);
  }
}


const setupDRF = async conn => {
  const DRF = stmts.DRF;
  try {
    for (const s of DRF) {
      try {
        await conn.execute(s);
      } catch (err) {
        if (err.errorNum != 942) throw (err);
      }
    }
    await conn.commit();

  } catch (err) {
    console.error('Error in setupDRF:\n', err.message);
  }
}

module.exports.setupSD = setupSD;
module.exports.setupVB = setupVB;
module.exports.setupIS = setupIS;
module.exports.setupDRF = setupDRF;

