var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var burger = sequelize.define('burger', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  burger_name: {
    type: Sequelize.STRING,
  },
  devoured: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

burger.sync();

module.exports = burger;
