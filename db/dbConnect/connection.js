var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: 'root', //change based on your system
  database: 'rezzy'
});

connection.connect();

module.exports = connection;

