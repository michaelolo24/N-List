const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const Users = require('../db/controller/users-helpers');
const links = require('./routes/links');
const user = require('./routes/user');
const photos = require('./routes/photos');

// connection
const db = require('../db/dbConnect/connection.js');

// Serve up client folder as well as login and signup pages

app.use(express.static(__dirname + '/../client/'));
app.use(bodyParser.json());
app.use('/signup', express.static(__dirname + '/views/signup.html'));
app.use('/login', express.static(__dirname + '/views/login.html'));

//create user sessions to track user across application

app.use(session({
  secret: 'captainPlanet',
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


app.post('/resources', links.resourses.postOne);

app.get('/resources', links.resourses.getAll);

app.put('/resources', links.resourses.updateVote);



app.get('/resources/:id', links.resourcesID.getOne);

app.delete('/resources/:id', links.resourcesID.deleteOne);

//Get language resources from lang tabe

app.get('/langResources', links.resourses.getLanguages);

//////////////////////////////////////////
//                                      //
//               imageU                 //
//                                      //
//////////////////////////////////////////

app.post('/upload', photos.uploader);

app.use('/uploads',express.static(__dirname + '/uploads'));

app.use('*', express.static(__dirname + '/views/error404.html'));
app.use('*', (req, res) => res.redirect('/views/error404.html') );

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Server is doing big things on port "+ port);

module.exports = app;
