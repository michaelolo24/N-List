// var express = require('express');
// var bodyParser = require('body-parser');
// var userRouter = express.Router();
// var app = require('../server');
var Users = require('../../db/controller/users-helpers.js');
var hashHelpers = require("../helpers/hashHelpers");
var Promise = require("bluebird");
var bcrypt = require("bcrypt-nodejs");
// app.use(bodyParser.json());
// app.set('trust proxy', 1); // trust first proxy



module.exports = {};

var sess;
// lOGIN USERS AND REGISTER SESSION
module.exports.signIn = function(req, res){

  Users.signIn(req.body, function(err,data){
    bcrypt.compare(req.body.password, data[0].password, function(err, result){
      if(result){
        sess = req.session;
        sess.email = data[0].email;
        sess.user = data[0].id;
        res.redirect('http://localhost:3000/');
      }else{
        res.status(401).send("That email and/or password was not found");
      }
    });
  });
}




//SIGN UP USERS AND REGISTER SESSION

module.exports.signUp = function(req, res){

  //check if user exists already

  Users.checkUser(req.body,function(err,data){

    if(err) throw err;

    // If user exists send them a message and reroute them to login page
    if(data.length > 0){
      res.status(409).send("The email address you specified is already in use.");
    }else{
      hashHelpers.hashPassword(req.body.password)
      .then(function(hashed){
        req.body.password = hashed;

        Users.signUp(req.body, function(err,data){
          if(err) console.log(err);
          console.log(data);
          sess = req.session;
          sess.email = req.body.email;
          sess.user = data.insertId;
          console.log(sess);
          res.redirect('http://localhost:3000/');
        });
      })
      //if user doesn't exist, sign them up and reroute them to home page

    }
  });
};


module.exports.getOneUser = function(req, res){
  //verify user is currently signed in
  if(sess.user !== undefined){
    Users.getOne(sess.user, function(err,data){
      if(err) console.log(err);
      res.json(data);
    });
  } else {
    res.redirect('http://localhost:3000/login');
  }
};

module.exports.updateOne = function(req, res){
  //verify user is currently signed in
  Users.updateOne(req.body, function(err,data){
    if(err) console.log(err);
    res.json(data);
  });
};

module.exports.deleteOne = function(req, res){
  //verify user is currently signed in
  Users.deleteOne(req.body, function(err,data){
    if(err) console.log(err);
    //delete user session here
    res.json(data);
  });
};

//LOGOUT ROUTE
module.exports.logout = function(req, res){
  sess = undefined;
  req.session.destroy();
  res.status(200).send("request processed");
  };

module.exports.sess = sess; //session variable to pass in session information to
