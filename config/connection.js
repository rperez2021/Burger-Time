const { Client } = require('pg');

var connection = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});
connection.connect()
module.exports = connection;