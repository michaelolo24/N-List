var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
var Users = require('../db/controller/users-helpers');
var links = require('./routes/links');
var user = require('./routes/user');
var photos = require('./routes/photos');

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

app.post('/login/validate', user.signIn);

app.post('/signup/register', user.signUp);

app.get('/updateUser', user.getOneUser);

app.put('/updateUser', user.updateOne);

app.delete('/updateUser', user.deleteOne);

app.post('/logout', user.logout);
//Routing for users and links requests

// app.use('/api', linksRouter);

app.post('/resources', links.resourses.postOne);

app.get('/resources', links.resourses.getAll);

app.put('/resources', links.resourses.updateOne);



app.get('/resources/:id', links.resourcesID.getOne);

app.delete('/resources/:id', links.resourcesID.deleteOne);


//////////////////////////////////////////
//                                      //
//               imageU                 //
//                                      //
//////////////////////////////////////////
// var linksRouter = express.Router();

app.post('/upload', photos.uploader);

app.use('/uploads',express.static(__dirname + '/uploads'));
// image upload end

app.listen(process.env.PORT || 3000);
console.log("Server is doing big things on port 3000");

module.exports = app;
