const { Client } = require('pg');

// var connection = new Client({
//     connectionString: process.env.DATABASE_URL,
//     ssl: true,
// });
// connection.connect()


var connection = new Client({
    user: 'Robert',
    host: 'localhost',
    database: 'burgers_db',
    password: null,
    port: 5432,
  })
  connection.connect()

  module.exports = connection;