var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var userRouter = express.Router();
var Users = require('../../db/controller/users-helpers.js');

app.use(bodyParser.json());

// app.use(session({
//   secret: 'my team is the suicide squad',
//   // cookie: {}
// }));

var sess;

// SIGNUP ROUTE
userRouter.route('/signup')

.post(function(req,res){
  Users.signUp(req.body, function(err,data){
    if(err) console.log(err);
    res.json(data);
  });
});


//LOGIN ROUTE

userRouter.route('/login')

.post(function(req, res){

  Users.signIn(req.body, function(err,data){
    if(err) console.log(err);
    //create user session here (set equal to true);
    console.log(data);
    // req.session.id = json.stringify(data).id;
    // sess.id = 2;
    // sess.id = data[0].id;
    console.log(data);
    res.redirect('http://localhost:3000/');

  });
});


//USER UPDATE ROUTE

userRouter.route('/updateUser')
.get(function(req, res){
  //verify user is currently signed in
  if(sess.id !== undefined){
    Users.getOne(sess.id, function(err,data){
      if(err) console.log(err);
      res.json(data);
    });
  } else {
    res.redirect('http://localhost:3000/login');
  }
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
