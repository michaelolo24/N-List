var express = require('express');

var router = express.Router();



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


module.exports = router;
