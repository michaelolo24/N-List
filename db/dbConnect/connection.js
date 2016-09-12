const mysql = require('mysql');

const dbCon = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2579',
  database: 'NList'
});

// const dbCon = mysql.createConnection({
//   host: 'nlist.cvtsvwvdzejt.us-west-1.rds.amazonaws.com',
//   user: 'Neekon',
//   password: 'NList11.0',
//   database: 'NList',
//   port: 3306
// });

dbCon.connect(function(err) {
  if (err) {
    console.log('error did not connect to rezzy CHECK YO self')
  }
  console.log('Connected to NList database BIG THIngs are COMING');
});

module.exports = dbCon;
