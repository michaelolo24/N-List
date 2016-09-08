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
module.exports= {};

module.exports.resourses = {
// login here
  postOne: function(req, res){
    if(users.sess.email !== undefined){
      Links.postOne(req.body,function(err,data){ //Post one resource into resource database
        if(err) console.log(err);
        res.json(data);
      });
    } else{
      res.redirect("http://localhost:3000/login");
    }
  },

  getAll: function(req, res){
      // !req.session.active ? res.redirect('/login') :
      Links.getAll(function(err,data){
        if(err) console.log(err);
        res.json(data);
      });
    },
// login here
  updateOne: function(req, res){

      // !req.session.active ? res.redirect('/login') :
      if(user.sess.email !== undefined){
        Links.updateOne(req.body, function(err,data){
          if(err) console.log(err);
          res.json(data);
        });
      } else {
        res.redirect("http://localhost:3000/login")
      }
    }
};
// SINGLE RESOURCE UPDATES (GET, PUT(UPDATE), DELETE);





module.exports.resourcesID = {

  getOne: function(req, res){
      // !req.session.active ? res.redirect('/login') :
      Links.getOne(req.params.id, function(err,data){
        if(err) console.log(err);
        res.json(data);
      });
    },
// login here
  deleteOne: function(req, res){
      // !req.session.active ? res.redirect('/login') :
      if(user.sess.email !== undefined){
        Links.deleteOne(req.params.id, function(err,data){
          console.log('***SINGLE RESOURCE DELETE****', req.params.id);
          if(err) console.log(err);
          res.json(data);
        });
      } else {
        res.redirect("http://localhost:3000/login")
      }
    }
};
