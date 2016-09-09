const db = require('../dbConnect/connection.js');

//********* LINKS HELPER S **************
var Links = {

  // ****GET ALL RESOURCES****

  getAll: (callback) =>{
    // fetch all resources
    /* ALIAS KEY
      r : resources
      t: resource_type
      l: languages
      s: subtopics
    */
    var query = 'SELECT r.title, r.id, r.id_sub_topic, \
    r.id_languages, r.id_resource_type, r.link, r.date_added, \
    r.date_updated, r.keywords, r.likes, r.dislikes,\
    t.type, l.name, s.topic \
    FROM resources r \
    JOIN resource_type t ON t.id = r.id_resource_type \
    JOIN languages l ON l.id = r.id_languages \
    JOIN sub_topic s ON s.id = r.id_sub_topic \
    ORDER BY date_added DESC';
    db.query(query, (err, results) => callback(err, results) );
  },
  // ****POST A RESOURCE****

  postOne: (params, callback) =>{

   var data = [params.title, params.language,(params.subTopic || null), params.type, params.link, params.keywords, params.likes, params.dislikes];

    var query = 'INSERT INTO resources(title, id_languages,\
       id_sub_topic, id_resource_type,\
       link, date_added, keywords,\
       likes, dislikes) value (?,?, ?, ?, ?, NOW(), ?, ?, ?)';
    db.query(query, data, (err, results) => callback(err, results) );
  },

  // ****GET A RESOURCE-accessed via req.params in url bar****

  getOne: (linkId, callback) =>{
    var data = [linkId];

    var query = 'SELECT r.id, l.name, t.type, r.sub_topic_id, r.link, \
    r.date_added, r.keywords, r.likes, r.dislikes \
    FROM resources r \
    LEFT OUTER JOIN resource_type t ON (r.id_resource_type = t.id) \
    LEFT OUTER JOIN languages l ON (r.id_languages = l.id) \
    WHERE r.id = ? LIMIT 1';

    db.query(query, data, (err, results) => callback(err, results) );
  },

  // ****UPDATE A RESOURCE-accessed via req.params in url bar****

  updateOne: (params, callback) =>{
    var dataArray = [params.likes, params.dislikes];
    var voteData = [params.uid, params.id];
    // var data = [params.language, params.subTopic, params.type, params.link, params.keywords];

    // var query = 'UPDATE resources r SET id_languages = ?, sub_topic_id = ?, id_resource_type = ?, link = ?, date_updated = NOW(), keywords = ? WHERE r.id = '+params.id +'LIMIT 1';
    //Check if vote already exists
    var checkVotes = 'SELECT id_resources FROM user_voted WHERE id_users = '+params.uid;
    var alreadyVoted = false;

    db.query(checkVotes, (err, data) => {
      data.forEach(resources => {
        if(resources.id_resources === params.id){
          console.log("ALREADY VOTED");
          alreadyVoted = true;
        }
      });

    if(!alreadyVoted){
      var votedQuery = 'INSERT INTO user_voted(id_users,id_resources) VALUE(?,?)';
     var query = 'UPDATE resources r SET likes = ?, dislikes = ? WHERE r.id = '+ params.id;

      db.query(votedQuery, voteData, (error, data) => {
        db.query(query, dataArray, (error, resource)=>{ callback(error, resource)});
      });

    }else{
      console.log("ALREADY VOTED ALREADY VOTED");
        callback(null,{success:"success"});
    }

    });



  },

  // ****DELETE A RESOURCE-accessed via req.params in url bar****

  deleteOne: (linkId, callback) =>{
    var data = [linkId];
    var query = 'DELETE FROM resources WHERE id=? LIMIT 1';
    db.query(query, data, (err, results) => callback(err, results) );
  }
};

module.exports = Links;
