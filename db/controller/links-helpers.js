var db = require('../dbConnect/connection.js');

//********* LINKS HELPER FUNCTIONS **************
var Links = {

  // ****GET ALL RESOURCES****

  getAll: function (callback) {
    // fetch all resources
    /* ALIAS KEY
      r : resources
      t: resource_type
      l: languages
      s: subtopics
    */
    var query = 'SELECT r.title, r.id, r.id_sub_topic, r.id_languages, r.id_resource_type, r.link, r.date_added, r.date_updated, r.keywords, r.likes, r.dislikes, t.type, l.name, s.topic \
    FROM resources r \
    JOIN resource_type t ON t.id = r.id_resource_type \
    JOIN languages l ON l.id = r.id_languages \
    JOIN sub_topic s ON s.id = r.id_sub_topic \
    ORDER BY date_added DESC';
    db.query(query, function(err, results) {
      console.log(results);
      callback(err, results);
    });
  },
  // ****POST A RESOURCE****

  postOne: function (params, callback) {

   var data = [params.title, params.language,(params.subTopic || null), params.type, params.link, params.keywords, params.likes, params.dislikes];

    var query = 'INSERT INTO resources(title, id_languages, id_sub_topic, id_resource_type, link, date_added, keywords, likes, dislikes) value (?,?, ?, ?, ?, NOW(), ?, ?, ?)';
    db.query(query, data, function(err, results) {
      callback(err, results);
    });
  },

  // ****GET A RESOURCE-accessed via req.params in url bar****

  getOne: function (linkId, callback) {
    var data = [linkId];

    var query = 'SELECT r.id, l.name, t.type, r.sub_topic_id, r.link, r.date_added, r.keywords, r.likes, r.dislikes \
    FROM resources r \
    LEFT OUTER JOIN resource_type t ON (r.id_resource_type = t.id) \
    LEFT OUTER JOIN languages l ON (r.id_languages = l.id) \
    WHERE r.id = ? LIMIT 1';

    db.query(query, data, function(err, results) {
      callback(err, results);
    });
  },

  // ****UPDATE A RESOURCE-accessed via req.params in url bar****

  updateOne: function (params, callback) {
    var data = [params.likes, params.dislikes];
    // var data = [params.language, params.subTopic, params.type, params.link, params.keywords];

    // var query = 'UPDATE resources r SET id_languages = ?, sub_topic_id = ?, id_resource_type = ?, link = ?, date_updated = NOW(), keywords = ? WHERE r.id = '+params.id +'LIMIT 1';
    console.log(params);
    var query = 'UPDATE resources r SET likes = ?, dislikes = ? WHERE r.id = '+ params.id;
    console.log(query);
    console.log(data);
    db.query(query, data, function(error, data){
      callback(error, data);
    });
  },

  // ****DELETE A RESOURCE-accessed via req.params in url bar****

  deleteOne: function (linkId, callback) {
    var data = [linkId];

   var query = 'DELETE FROM resources WHERE id=? LIMIT 1';
    db.query(query, data, function(err, results){
      callback(err, results);
      console.log("resuts!")
    });
  }

};

module.exports = Links;
