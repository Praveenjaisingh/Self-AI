// scripts/flushDB.js
const { sequelize } = require('../Models'); 

async function flushDB() {
  try {
    await sequelize.sync({ force: true });

    console.log('Database flushed successfully ✅');
    process.exit(0);
  } catch (error) {
    console.error('Error flushing database ❌:', error);
    process.exit(1);
  }
}

flushDB();