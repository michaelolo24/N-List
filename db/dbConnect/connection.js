var mysql = require('mysql');

var dbCon = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rezzy'
});

// var dbCon = mysql.createConnection({
//   host: 'nlist.cjr98onwco2a.us-west-2.rds.amazonaws.com',
//   user: 'Neekon',
//   password: 'NList11.0',
//   database: 'NList',
//   port: 3306
// });
dbCon.connect(function(err) {
  if (err) {
    console.log('error did not connect to rezzy CHECK YO self')
  }
  console.log('Connected to rezzy database BIG THIngs are COMING');
});

module.exports = dbCon

