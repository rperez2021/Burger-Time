const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    connectionString: process.env.DATABASE_URL,
  ssl: true,
});

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync()


  module.exports = sequelize;