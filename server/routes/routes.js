var express = require('express');
var router = express.Router();
var helpers = require('../../db/controller/helpers.js');
//each callback below is routed to helper functions that preform the actual querying on the database

//our team is so strong!!

//API ROUTES

/* All resources below use the Links helper functions
/resources
  post -> posts one resource : uses postOne helper
  get -> gets all resources : uses getAll helper
  put -> updates one resource : uses updateOne helper -- needs user id in req.body

/resources/:id
  get -> gets one resource : uses getOne helper -- needs user id in req.params
  delete -> deletes one resource : uses deleteOne helper -- needs user id in req.params

*/


router.route('/resources')
.post(function(req, res){
  helpers.Links.postOne(req.body,function(err,data){ //Post one resource into resource database
    if(err) console.log(err);
    res.json(data);
  });
})

.get(function(req, res){
  // !req.session.active ? res.redirect('/login') :
  helpers.Links.getAll(function(err,data){
    if(err) console.log(err);
    res.json(data);
  });
})

.put(function(req, res){
  // !req.session.active ? res.redirect('/login') :
  helpers.Links.updateOne(req.body, function(err,data){
    if(err) console.log(err);
    res.json(data);
  });
});

// SINGLE RESOURCE UPDATES (GET, PUT(UPDATE), DELETE);

router.route('/resources/:id')
.get(function(req, res){
  // !req.session.active ? res.redirect('/login') :
  helpers.Links.getOne(req.params.id, function(err,data){
    if(err) console.log(err);
    res.json(data);
  });
})
.delete(function(req, res){
  // !req.session.active ? res.redirect('/login') :
  helpers.Links.deleteOne(req.params.id, function(err,data){
    console.log('***SINGLE RESOURCE DELETE****', req.params.id);
    if(err) console.log(err);
    res.json(data);
  });
});

module.exports = router;
