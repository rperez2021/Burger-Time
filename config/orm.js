var connection = require('../config/connection.js')
var orm = {
select_all: function(table, callback) {
    connection.query("SELECT * FROM ?? ;", [table], function(err, response) {
        if (err) throw err;
        
        callback(response)
    })

},

insert: function(table, col, name, callback) {
    connection.query("INSERT INTO ?? (??) VALUES (?);", [table, col, name], function(err, response) {
        if (err) throw err;
        callback(response)
    })
},

update: function(table, bool, col, name, callback) {
    connection.query("UPDATE ?? SET devoured = ? WHERE ?? = ?;", [table, bool, col, name], function(err, response) {
        if (err) throw err;
        callback(response)
    })
}
}

module.exports = orm;
