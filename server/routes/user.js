const Users = require('../../db/controller/users-helpers.js');
const hashHelpers = require("../helpers/hashHelpers");
const Promise = require("bluebird");
const bcrypt = require("bcrypt-nodejs");



module.exports = {};

var sess;
// lOGIN USERS AND REGISTER SESSION
module.exports.signIn = (req, res)=>{
// redirect to signup when user does not exist
  Users.signIn(req.body, (err,data)=>{
    bcrypt.compare(req.body.password, data[0].password, (err, result)=>{
      if(result){
        sess = req.session;
        sess.email = data[0].email;
        sess.user = data[0].id;
        module.exports.sess = sess; //session variable to pass in session information to
        res.redirect('http://localhost:3000/');
      }else{
        res.status(401).send("That email and/or password was not found");
      }
    });
  });
}


//SIGN UP USERS AND REGISTER SESSION

module.exports.signUp = (req, res)=>{

  //check if user exists already

  Users.checkUser(req.body,(err,data)=>{

    if(err) throw err;

    // If user exists send them a message and reroute them to login page
    if(data.length > 0){
      res.status(409).send("The email address you specified is already in use.");
    }else{
      hashHelpers.hashPassword(req.body.password)
      .then(hashed=>{
        req.body.password = hashed;

        Users.signUp(req.body, (err,data)=>{
          if(err) console.log(err);
          console.log(data);
          sess = req.session;
          sess.email = req.body.email;
          sess.user = data.insertId;
          module.exports.sess = sess; //session variable to pass in session information to
          console.log(sess);
          res.redirect('http://localhost:3000/');
        });
      })
      //if user doesn't exist, sign them up and reroute them to home page

    }
  });
};


module.exports.getOneUser = (req, res)=>{
  //verify user is currently signed in
<<<<<<< HEAD
  if(sess !== undefined){
    Users.getOne(sess.user, function(err,data){
=======
  if(sess.user !== undefined){
    Users.getOne(sess.user, (err,data)=>{
>>>>>>> da3c85da23167e5ac419c869b93d213159c3e187
      if(err) console.log(err);
      res.json(data);
    });
  } else {
    res.status(401).send("Must be signed in");
  }
};

module.exports.updateOne = (req, res)=>{
  //verify user is currently signed in
  Users.updateOne(req.body, (err,data)=>{
    if(err) console.log(err);
    res.json(data);
  });
};

module.exports.deleteOne = (req, res)=>{
  //verify user is currently signed in
  Users.deleteOne(req.body, (err,data)=>{
    if(err) console.log(err);
    //delete user session here
    res.json(data);
  });
};

//LOGOUT ROUTE
module.exports.logout = (req, res)=>{
  sess = undefined;
  req.session.destroy();
  console.log("I'm signed out!!");
  console.log(req.session);
  res.status(200).send("request processed");
  };
