var express = require('express');
var userRouter = express.Router();
var Users = require('../../db/controller/users-helpers.js');

// SIGNUP ROUTE

userRouter.route('/signup')
.get(function(req, res){
  console.log("hello???")
  res.render('../views/signup');
})
.post(function(req,res){
  Users.signUp(req.body, function(err,data){
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
  Users.signIn(req.body, function(err,data){
    if(err) console.log(err);
    //create user session here (set equal to true);
    console.log(data);
    res.redirect('http://localhost:3000/');

  });
});


//USER UPDATE ROUTE

userRouter.route('/updateUser')
.get(function(req, res){
  //verify user is currently signed in
  Users.getOne(req.body, function(err,data){
    if(err) console.log(err);
    res.json(data);
  });
})
.put(function(req, res){
  //verify user is currently signed in
  Users.updateOne(req.body, function(err,data){
    if(err) console.log(err);
    res.json(data);
  });
})
.delete(function(req, res){
  //verify user is currently signed in
  Users.deleteOne(req.body, function(err,data){
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
