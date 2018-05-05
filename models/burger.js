var orm = require('../config/orm.js');

var burger = {
  select_all: function(callback) {
    orm.select_all('burgers', function(response) {
      callback(response);
    });
  },

  insert: function(col, name, callback) {
    orm.insert('burgers', col, name, function(response) {
        callback(response);
    });
  },

  update: function(col, name, callback) {
    orm.update('burgers', true, col, name, function(response) {
        callback(response);
    });
  }
};

module.exports = burger;
