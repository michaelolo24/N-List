var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(express.static(__dirname + '/../client/'));
app.use(bodyParser.json());
app.use('/api', router);

//////////////////////////////////////////
//                                      //
//               Routes                 //
//                                      //
//////////////////////////////////////////

router.route('/resources')
  .post(function(req, res){
    res.send('post request received')
  })
  .get(function(req, res){
    res.send('get request received')
  });



router.route('/resource/:resource_id')
  .get(function(req, res){
    res.send('singlet get req. received')
  })
  .put(function(req, res){
    res.send('update req. received')
  })
  .delete(function(req, res){
    res.send('delete request received')
  })


app.listen(process.env.PORT || 3000);
console.log("Server is doing big things on port 3000");