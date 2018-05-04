var connection = require('../config/connection.js')
var orm = {
select_all: function selectAll(table) {
    connection.query("SELECT * FROM ?? ;", [table], function(err, results) {
        if (err) throw err;
        console.log(results)
    })

},

insert: function insertOne(table, col, name, callback) {
    connection.query("INSERT INTO ?? (??) VALUES (?);", [table, col, name], function(err, results) {
        if (err) throw err;
        console.log(results)
    })
},

update: function updateOne(table, bool, col, name, callback) {
    connection.query("UPDATE ?? SET devoured = ? WHERE ?? = ?;", [table, bool, col, name], function(err, results) {
        if (err) throw err;
        console.log(results)
    })
}
}

module.exports = orm;

