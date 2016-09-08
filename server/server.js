var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
var Users = require('../db/controller/users-helpers.js');
linksRouter = require('./routes/links');
userRouter = require('./routes/user');

// connection
var db = require('../db/dbConnect/connection.js');

// Serve up client folder as well as login and signup pages

app.use(express.static(__dirname + '/../client/'));
app.use(bodyParser.json());
app.use('/signup', express.static(__dirname + '/views/signup.html'));
app.use('/login', express.static(__dirname + '/views/login.html'));

//create user sessions to track user across application

app.use(session({
  secret: 'my team is the suicide squad',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}));

var sess; //session variable to pass in session information to

// lOGIN USERS AND REGISTER SESSION

app.post('/login/validate',function(req, res){
  Users.signIn(req.body, function(err,data){
    if(data.length > 0){
      sess = req.session;
      sess.email = data[0].email;
      sess.user = data[0].id;
      res.redirect('http://localhost:3000/');
    }else{
      res.status(401).send("That email and/or password was not found");
    }
  });
});


//SIGN UP USERS AND REGISTER SESSION

app.post('/signup/register',function(req, res){

  //check if user exists already

  Users.checkUser(req.body,function(err,data){

    if(err) throw err;

    // If user exists send them a message and reroute them to login page
    if(data.length > 0){
      res.status(409).send("Your email account is already registered");
    }else{

      //if user doesn't exist, sign them up and reroute them to home page

      Users.signUp(req.body, function(err,data){
        if(err) console.log(err);
          sess = req.session;
          sess.email = data[0].email;
          sess.user = data[0].id;
          res.redirect('http://localhost:3000/');
      });
    }
  });
});


app.get('/updateUser', function(req, res){
  //verify user is currently signed in
  if(sess.user !== undefined){
    Users.getOne(sess.user, function(err,data){
      if(err) console.log(err);
      res.json(data);
    });
  } else {
    res.redirect('http://localhost:3000/login');
  }
});

app.put('/updateUser', function(req, res){
  //verify user is currently signed in
  Users.updateOne(req.body, function(err,data){
    if(err) console.log(err);
    res.json(data);
  });
});

app.delete('/updateUser', function(req, res){
  //verify user is currently signed in
  Users.deleteOne(req.body, function(err,data){
    if(err) console.log(err);
    //delete user session here
    res.json(data);
  });
});

























//Routing for users and links requests

app.use('/api', linksRouter);
app.use('/users', userRouter);


// id
//////////////////////////////////////////
//                                      //
//               imageU                 //
//                                      //
//////////////////////////////////////////
// var linksRouter = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
        destination: function (request, file, callback) {
            callback(null, './uploads/');
            // console.log("line 37");
        },
        filename: function (request, file, callback) {
            // console.log("line 40");
            callback(null, file.originalname);
        }
    });

var upload = multer({
                storage: storage
            }).single('file');


app.post('/upload', function(request, response) {
    upload(request,response,function(err){
        if(err){
              // console.log("line 53");
             response.json({error_code:1, err_desc:err});
             return;
        }
          // console.log("line 57");
         response.json({error_code:0, err_desc:null});
    });
});

app.use('/uploads',express.static(__dirname + '/uploads'));
// image upload end

app.listen(process.env.PORT || 3000);
console.log("Server is doing big things on port 3000");
