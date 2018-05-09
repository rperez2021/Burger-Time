const Sequelize = require('sequelize');
const sequelize = new Sequelize('burgers_db', 'Robert', null, {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  operatorsAliases: false
});

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync()
  .then(() => User.create({
    username: 'robert',
    birthday: new Date(1984, 3, 16)
  }))
  .then(robert => {
    console.log(robert.toJSON());
  });

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = sequelize;