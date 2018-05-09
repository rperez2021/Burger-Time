const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  ssl: true,
  dialect: 'postgres',
  protocol: 'postgres',
  logging: true
});

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync()

sequelize.User.destroy({
  where: {},
  truncate: true
})


module.exports = sequelize;