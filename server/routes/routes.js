var express = require('express');
var router = express.Router();
var helpers = require('../../db/controller/helpers.js');
//each callback below is routed to helper functions that preform the actual querying on the database

//our team is so strong!!
//api routes
router.route('/resources')
.post(function(req, res){
  helpers.Links.postOne(req.body,function(err,data){ //Post one resource into resource database
    if(err) console.log(err);
    res.json(data);
  });
})

.get(function(req, res){ //Get all resources if a user is signed in
  !req.session.active ? res.redirect('/login') : helpers.Links.getAll(function(err,data){
    if(err) console.log(err);
    res.json(data);
  });
})

.put(function(req, res){
  !req.session.active ? res.redirect('/login') : helpers.Links.updateOne(req.body, function(err,data){
    console.log('***SINGLE RESOURCE PUT****', req.params.id);
    if(err) console.log(err);
    res.json(data);
  });
});

// SINGLE RESOURCE UPDATES (GET, PUT(UPDATE), DELETE);
router.route('/resource/:id')// (www.nlist.com/resource/1)
.get(function(req, res){
  !req.session.active ? res.redirect('/login') :  helpers.Links.getOne(req.params.id, function(err,data){
    console.log('***SINGLE RESOURCE GET****', req.params.id);
    if(err) console.log(err);
    res.json(data);
  });
})
.delete(function(req, res){
  !req.session.active ? res.redirect('/login') : helpers.Links.deleteOne(req.params.id, function(err,data){
    console.log('***SINGLE RESOURCE DELETE****', req.params.id);
    if(err) console.log(err);
    res.json(data);
  });
});

module.exports = router;
