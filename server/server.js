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
app.use('/api', router);
app.use(session({
  secret: 'my team is the suicide squad',
  cookie: {}
}));
//////////////////////////////////////////
//                                      //
//               Routes                 //
//                                      //
//////////////////////////////////////////



app.listen(process.env.PORT || 3000);
console.log("Server is doing big things on port 3000");
