var express = require('express');
var bodyParser = require('body-parser');
var app = express();
router = require('./routes');

// dbCon
var db = require('../db/dbConnect/con');

app.use(express.static(__dirname + '/../client/'));
app.use(bodyParser.json());
app.use('/api', router);
//////////////////////////////////////////
//                                      //
//               Routes                 //
//                                      //
//////////////////////////////////////////



app.listen(process.env.PORT || 3000);
console.log("Server is doing big things on port 3000");
