const Links =  require("../../db/controller/links-helpers.js");
const users = require("./user");
//each callback below is routed to helper s that preform the actual querying on the database

//our team is so strong!!

//API ROUTES

/* All resources below use the Links helper s
/resources
  post -> posts one resource : uses postOne helper
  get -> gets all resources : uses getAll helper
  put -> updates one resource : uses updateOne helper -- needs user id in req.body

/resources/:id
  get -> gets one resource : uses getOne helper -- needs user id in req.params
  delete -> deletes one resource : uses deleteOne helper -- needs user id in req.params

*/
var Links =  require("../../db/controller/links-helpers.js");
var users = require("./user");


module.exports= {};

module.exports.resourses = {
// login here
  postOne: (req, res)=>{
    if(users.sess !== undefined){
      Links.postOne(req.body, (err,data)=>{ //Post one resource into resource database
        if(err) console.log(err);
        res.json(data);
      });
    } else{
      res.redirect("http://localhost:3000/login");
    }
  },

  getAll: (req, res)=>{
      // !req.session.active ? res.redirect('/login') :
      Links.getAll((err,data)=>{
        if(err) console.log(err);
        res.json(data);
      });
    },
// login here
  updateOne: (req, res)=>{

      // !req.session.active ? res.redirect('/login') :
      if(user.sess.email !== undefined){
        Links.updateOne(req.body, (err,data)=>{
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

  getOne: (req, res)=>{
      // !req.session.active ? res.redirect('/login') :
      Links.getOne(req.params.id, (err,data)=>{
        if(err) console.log(err);
        res.json(data);
      });
    },
// login here
  deleteOne: (req, res)=>{
      // !req.session.active ? res.redirect('/login') :
      if(user.sess.email !== undefined){
        Links.deleteOne(req.params.id, (err,data)=>{
          if(err) console.log(err);
          res.json(data);
        });
      } else {
        res.redirect("http://localhost:3000/login")
      }
    }
};
