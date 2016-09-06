var db = require('../dbConnect/connection.js');

module.exports = {
  Users: {

    signIn: function (params, callback) {
      var data = [params.email, params.password];

      console.log("***USER SIGNED IN****", data);

      var query = 'SELECT * FROM users WHERE email=? AND password=?';
      db.query(query, data, function(err, results) {
        callback(err, results);
      });
    },

    signUp: function (params, callback) {
      // create a user (works - tested 9/6)
      var data = [params.name, params.email, params.password];

      console.log("***USER SIGNED UP****", data);

      var query = "INSERT INTO users (name,email,password) VALUES (?,?,?)";
      db.query(query, data, function(err, results) {
        callback(err, results);
      });
    },

    getOne: function (params, callback) {
      //get one user --> for profile

      var data = [params.email, params.password];

      console.log("***SINGLE USER 'GET ONE' RETRIEVED****", data);

      var query = 'SELECT * FROM users WHERE email=? AND password=?';
      db.query(query, data, function(err, results) {
        callback(err, results);
      });
    },

    updateOne: function (params, callback) {
      // update one user
      var data = [params.name, params.photoPath, params.languages, params.email, params.password];

      console.log("***SINGLE USER 'UPDATE ONE' RUN****", data);

      var query = 'UPDATE users SET name=?, photoPath=?, languages=?, email=?, password=? WHERE email ='+params.email+'AND password='+params.password+'';
      db.query(query, data, function(err, results) {
        callback(err, results);
      });
    },

    deleteOne: function (params, callback) {
      // fetch one user
      var data = [params.email, params.password];

      console.log("***SINGLE USER 'DELETE ONE' RUN****", data);

      var query = 'DELETE FROM users WHERE email=? AND password=?';
      db.query(query, data, function(err, results) {
        callback(err, results);
      });
    }
  }, //END USER INFORMATION

  Links: {
    getAll: function (callback) {
      // fetch all resources
      /* ALIAS KEY
        r : resources
        c: creators
        t: resource_type
        l: languages
        s: subtopics
      */
      var query = 'SELECT r.id, c.name, l.name, s.name, t.type, r.link, r.date_added, r.keywords, r.likes, r.dislikes \
      FROM resources r \
      LEFT OUTER JOIN creators c ON (c.id = r.id_creators) \
      LEFT OUTER JOIN resource_type t ON (r.id_resource_type = t.id) \
      LEFT OUTER JOIN languages l ON (r.id_languages = l.id) \
      LEFT OUTER JOIN sub_topics s ON (r.id_sub_topics = s.id) \
      ORDER BY date_added DESC';
      db.query(query, function(err, results) {
        console.log(results);
        callback(err, results);
      });
    },
    postOne: function (params, callback) {
      // Post a single link

      var dataOne = [params.creatorName];
      var dataTwo = [params.language, params.subTopic, params.type, params.link, params.keywords];

      console.log("###DATA1###: ", dataOne);
      console.log("###DATA2###: ", dataTwo);

      var queryOne = 'INSERT INTO creators (name) VALUES (?)';
      var queryTwo = 'INSERT INTO resources(id_creators, id_languages, id_sub_topics, id_resource_type, link, date_added, keywords) value (LAST_INSERT_ID(), ?, ?, ?, ?, NOW(), ?)';
      db.query(queryOne, dataOne, function(err, results) {
        db.query(queryTwo, dataTwo, function(error, data){
          callback(error, data);
        });
      });
    },

    getOne: function (linkId, callback) {
      // Post a single link
      var data = [linkId];

      console.log("*****GET ONE ID******", data);

       var query = 'SELECT r.id, c.name, l.name, s.name, t.type, r.link, r.date_added, r.keywords, r.likes, r.dislikes \
      FROM resources r \
      LEFT OUTER JOIN creators c ON (c.id = r.id_creators) \
      LEFT OUTER JOIN resource_type t ON (r.id_resource_type = t.id) \
      LEFT OUTER JOIN languages l ON (r.id_languages = l.id) \
      LEFT OUTER JOIN sub_topics s ON (r.id_sub_topics = s.id) \
      WHERE r.id = ?';

      db.query(query, data, function(err, results) {
        callback(error, data);
      });
    },

    updateOne: function (params, callback) {
      // Post a single link
      console.log("update one is accessed");

     /* var dataOne = [params.creatorName];
      var dataTwo = [params.language, params.subTopic, params.type, params.link, params.keywords];

      console.log("*****UPDATE ONE ID******", data);

      var query = 'UPDATE c.name, l.name, s.name, t.type, r.link, r.date_added, r.keywords, r.likes, r.dislikes \
      FROM resources r \
      LEFT OUTER JOIN creators c ON (c.id = r.id_creators) \
      LEFT OUTER JOIN resource_type t ON (r.id_resource_type = t.id) \
      LEFT OUTER JOIN languages l ON (r.id_languages = l.id) \
      LEFT OUTER JOIN sub_topics s ON (r.id_sub_topics = s.id) \
      WHERE r.id = ?';

      db.query(queryStrTwo, dataTwo, function(error, data){
        callback(error, data);
      });*/
    },

    deleteOne: function (linkId, callback) {
      // Post a single link

      var data = [linkId];

      console.log("*****DELETE ONE ID******", data);

      var query = 'DELETE FROM resources WHERE id=?';
      db.query(query, data, function(error, data){
        callback(error, data);
      });
    }

  }
};

