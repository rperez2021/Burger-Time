const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
  dialect: 'postgres',
  protocol: 'postgres',
  port: match[4],
  host: match[3],
  logging: true
});

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync()


module.exports = sequelize;