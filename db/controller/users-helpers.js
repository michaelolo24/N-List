var db = require('../dbConnect/connection.js');

var Users = {

  // ****SIGN IN HELPER ****
  signIn: function (params, callback) {
    var data = [params.email];
    var query = 'SELECT * FROM users WHERE email=? LIMIT 1';
    db.query(query, data, function(err, results) {
      callback(err, results);
    });
  },

   // ****SIGN UP HELPER ****
  signUp: function (params, callback) {
    var data = [params.name, params.email, params.password];
    var query = "INSERT INTO users (name,email,password) VALUES (?,?,?)";
    db.query(query, data, function(err, results) {
      callback(err, results);
    });
  },

  // ****CHECK USER HELPER ****
  checkUser: function (params, callback) {
    var data = [params.email];
    var query = "SELECT * FROM users WHERE email=? LIMIT 1";
    db.query(query, data, function(err, results) {
      callback(err, results);
    });
  },

   // ****GET USER INFO FOR UPDATE PAGE ****
  getOne: function (params, callback) {
    // var data = [params.email, params.password];
    var query = 'SELECT * FROM users WHERE id=? LIMIT 1';
    db.query(query, [params], function(err, results) {
      callback(err, results);
    });
  },

   // ****UPDATE USER INFO****
  updateOne: function (params, callback) {
    var data = [params.name, params.photoPath, (params.languages || null), params.email, params.password];
    console.log(params);
    var query = 'UPDATE users SET name=?, photo_path=?, languages=?, email=?, password=? WHERE id ="'+params.id+'" LIMIT 1';
    db.query(query, data, function(err, results) {
      callback(err, results);
    });
  },

  // ****DELETE USER [DESTROY ACCOUNT]****
  deleteOne: function (params, callback) {
    var data = [params.email, params.password];

    var query = 'DELETE FROM users WHERE email=? AND password=? LIMIT 1';
    db.query(query, data, function(err, results) {
      callback(err, results);
    });
  }
};

module.exports = Users;
