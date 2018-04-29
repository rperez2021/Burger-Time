var orm = require('../config/orm.js');

var burger = {
  selectAll: function(callback) {
    orm.select_all(function(response) {
      callback(response);
    });
  },

  insertOne: function(name, bool, callback) {
    orm.insert(name, bool, function(response) {
        callback(response);
    });
  },

  updateOne: function(name, bool, callback) {
    orm.updateOne(name, bool, function(response) {
        callback(response);
    });
  }
};

module.exports = burger;