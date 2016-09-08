var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
var Users = require('../db/controller/users-helpers.js');
linksRouter = require('./routes/links');
var user = require('./routes/user');

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

//Routing for users and links requests

app.use('/api', linksRouter);
// app.use('/users', userRouter);


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

module.exports = app;
