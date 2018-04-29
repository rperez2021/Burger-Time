import connection from "connection";
var orm = {
select_all: function selectAll(callback) {
    connection.query("SELECT * FROM burgers_db", function(err, results) {
        if (err) throw err;
        callback(results)
    })

},

insert: function insertOne(name, bool, callback) {
    connection.query("INSERT INTO burgers (burger_name, devoured) VALUES ('" + name +
    "'," + bool + ");", function(err, results) {
        if (err) throw err;
        callback(results)
    })
},

update: function updateOne(name, bool, callback) {
    connection.query("UPDATE burgers SET devoured = " + bool + ", WHERE burger_name = '" +
    name + "';", function(err, results) {
        if (err) throw err;
        callback(results)
    })
}
}

module.exports = orm;