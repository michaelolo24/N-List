const db = require('../dbConnect/connection.js');

//********* LINKS HELPERS **************
var Links = {

  // ****GET ALL RESOURCES****

  getAll: (callback) =>{
    // fetch all resources
    /* ALIAS KEY
      r : resources
      t : resource_type
      l : languages
      //The sub topic is all handeled in the front end. Only a number key is stored in the back end
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

  // ********UPDATE A RESOURCE********

  updateOne: (params, callback) =>{
    params.vote = Number(params.vote); // make sure it is being read as a number
    let voteData = [params.uid, params.id, params.vote]; //uid  = user id // id = resource id
         
    //Check if vote already exists
    const checkUserVote = 'SELECT * FROM user_voted WHERE id_users = '+params.uid;
    let alreadyVoted = false;
    let likes = 0; //This will store all of the current likes for this resource
    let dislikes = 0; //This will store all of the current dislikes for this resource

    db.query(checkUserVote, (err, userVoteData) => {
      userVoteData.forEach(resources => {
        if(resources.id_resources === params.id){
          alreadyVoted = true;
          console.log(resources);
          userVoteStatus = Number(resources.vote); //make sure it is read as a number
          console.log(userVoteStatus);
        }
      });//we don't close off the query here to force an asynchronous process (maybe convert to promises if time permits)


      //Check if vote already exists
      const checkResourceVotes = 'SELECT vote FROM user_voted WHERE id_resources = '+params.id;

      db.query(checkResourceVotes, (err, resourceVoteData) => {
        resourceVoteData.forEach(resource => {
          if(resource.vote === 1){
            likes++; //get total number of current likes based on user vote table data
          }
          if(resource.vote === 0){
            dislikes++; //get total number of current dislikes based on user vote table data
          }
        }); //we don't close off the query here to force an asynchronous process (maybe convert to promises if time permits)

        const updateResourcesTable = (finalLike, finalDislike) => { //this function is reused multiple times; abstracted to update resource table;
          const finalUpdateQuery = 'UPDATE resources r SET likes = ?, dislikes = ? WHERE r.id = '+ params.id;
          db.query(finalUpdateQuery, [finalLike, finalDislike], (finalError, finalResource)=>{ callback(finalError, finalResource)});
        };

        if(!alreadyVoted){
          console.log("NOT ALREADY VOTED");
          const votedQuery = 'INSERT INTO user_voted(id_users,id_resources, vote) VALUE(?,?,?)';
          
          params.vote === 1 ? likes++ : dislikes++ ; 
          db.query(votedQuery, voteData, (error, data) => {
            updateResourcesTable(likes,dislikes);
          });
        }else{
          if(params.vote === userVoteStatus){
            console.log("VOTES MATCH");
            const deleteVote = 'DELETE FROM user_voted WHERE id_users = ? AND id_resources = ?';
            db.query(deleteVote, [params.uid, params.id], (error, data) => {
              if(err) throw err;
              console.log(data);
              if(params.vote === 0){
                console.log("REMOVING A DISLIKE");
                dislikes--;
                updateResourcesTable(likes,dislikes);
              }
              if(params.vote === 1){
                console.log("REMOVING A LIKE");
                likes--;
                updateResourcesTable(likes,dislikes);
              }
            });
          }else{
            console.log("SWITCHING VOTES");
            const userVoteQuery = 'UPDATE user_voted u SET vote = ? WHERE u.id_resources = '+ params.id +' AND u.id_users ='+ params.uid;
            if(params.vote > userVoteStatus){
            console.log("SWITCHING TO LIKE")
              dislikes--;
              likes++;
              db.query(userVoteQuery, [params.vote], (error, data) =>{
                updateResourcesTable(likes, dislikes);
              });
            }else if(params.vote < userVoteStatus){
            console.log("SWITCHING TO DISLIKE");
              likes--;
              dislikes++;
              db.query(userVoteQuery, [params.vote], (error, data) =>{
                updateResourcesTable(likes, dislikes);
              });
            }
          }
        }
      });
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
