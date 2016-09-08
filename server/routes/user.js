var express = require('express');
var bodyParser = require('body-parser');
var userRouter = express.Router();
var Users = require('../../db/controller/users-helpers.js');
var app = express();


app.use(bodyParser.json());
app.set('trust proxy', 1); // trust first proxy



/******  DELETE IF EVERYTHING ELSE WORKS OKAY *********/
// SIGNUP ROUTE
// userRouter.route('/signup')

// .post(function(req,res){
//   Users.signUp(req.body, function(err,data){
//     if(err) console.log(err);
//     res.json(data);
//   });
// });


/******  DELETE IF EVERYTHING ELSE WORKS OKAY *********/


//LOGIN ROUTE


// userRouter.route('/login')

// .post(function(req, res){
//     console.log("REQSESSION OUTSIDE", req.session);

//   Users.signIn(req.body, function(err,data){
//     if(err) console.log(err);

//     //req.session.id = JSON.stringify(data).id;
//     // sess.id = 2;
//     // sess.id = data[0].id;
//     res.redirect('http://localhost:3000/');

//   });
// });


//USER UPDATE ROUTE

// userRouter.route('/updateUser')
// .get(function(req, res){
//   //verify user is currently signed in
//   if(sess.id !== undefined){
//     Users.getOne(sess.id, function(err,data){
//       if(err) console.log(err);
//       res.json(data);
//     });
//   } else {
//     res.redirect('http://localhost:3000/login');
//   }
// })
// .put(function(req, res){
//   //verify user is currently signed in
//   Users.updateOne(req.body, function(err,data){
//     if(err) console.log(err);
//     res.json(data);
//   });
// })
// .delete(function(req, res){
//   //verify user is currently signed in
//   Users.deleteOne(req.body, function(err,data){
//     if(err) console.log(err);
//     //delete user session here
//     res.json(data);
//   });
// });



//LOGOUT ROUTE

userRouter.route('/logout')
.get(function(req, res){
  req.session.destroy();
  res.redirect('login');
});

module.exports = userRouter;
