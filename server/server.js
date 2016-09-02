var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/'));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000);
console.log("Server is doing big things on port 3000");