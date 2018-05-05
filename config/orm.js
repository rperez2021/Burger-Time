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

// var newf = {
// 	// Function that returns all table entries
// 	selectAll: function(tableInput, cb) {
// 		// Construct the query string that returns all rows from the target table
// 		var queryString = "SELECT * FROM " + tableInput + ";";

// 		// Perform the database query
// 		connection.query(queryString, function(err, result) {
// 			if (err) {
// 				throw err;
// 			}

// 			// Return results in callback
// 			cb(result);
// 		});
//     }
// }
