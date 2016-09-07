var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
router = require('./routes/routes');
userRouter = require('./routes/user');

// connection
var db = require('../db/dbConnect/connection.js');

app.use(express.static(__dirname + '/../client/'));
app.use(bodyParser.json());
app.use('/signup', express.static(__dirname + '/views/signup.html'));
app.use('/login', express.static(__dirname + '/views/login.html'));



//Routing
app.use('/api', router);
app.use('/users', userRouter);

app.use(session({
  secret: 'my team is the suicide squad',
  cookie: {}
}));
//////////////////////////////////////////
//                                      //
//               imageU                 //
//                                      //
//////////////////////////////////////////
// var router = express.Router();
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
