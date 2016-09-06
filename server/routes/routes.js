var express = require('express');
var router = express.Router();


//api routes
router.route('/resources')
.post(function(req, res){
  res.send('post request received')
})
.get(function(req, res){
  !req.session.active ? res.redirect('/login') : res.send('get request received');
});

router.route('/resource/:resource_id')
.get(function(req, res){
  !req.session.active ? res.redirect('/login') : res.send('singlet get req. received');
})
.put(function(req, res){
  !req.session.active ? res.redirect('/login') : res.send('update req. received');
})
.delete(function(req, res){
  !req.session.active ? res.redirect('/login') : res.send('delete request received');
})

module.exports = router;
