var express = require('express');
var userRouter = express.Router();
var helpers = require('../../db/controller/helpers.js');

// SIGNUP ROUTE

userRouter.route('/signup')
.get(function(){
  res.render('signup');
})
.post(function(){
  helpers.Users.signUp(req.body, function(err,data){
    if(err) console.log(err);
    res.json(data);
  });
});


//LOGIN ROUTE

userRouter.route('/login')
.get(function(){
  res.render('login');
})
.post(function(req, res){
  helpers.Users.signIn(req.body, function(err,data){ //changed getOne to signIn --> change in helpers
    if(err) console.log(err);
    //create user session here (set equal to true);
    res.json(data);
  });
});


//USER UPDATE ROUTE

userRouter.route('/updateUser')
.get(function(req, res){
  //verify user is currently signed in
  helpers.Users.getOne(req.body, function(err,data){
    if(err) console.log(err);
    res.json(data);
  });
})
.put(function(req, res){
  //verify user is currently signed in
  helpers.Users.updateOne(req.body, function(err,data){
    if(err) console.log(err);
    res.json(data);
  });
})
.delete(function(req, res){
  //verify user is currently signed in
  helpers.Users.deleteOne(req.body, function(err,data){
    if(err) console.log(err);
    //delete user session here
    res.json(data);
  });
});



//LOGOUT ROUTE

userRouter.route('/logout')
.get(function(req, res){
  req.session.destroy();
  res.redirect('login');
});

module.exports = userRouter;
