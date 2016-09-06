var express = require('express');
var userRouter = express.Router();

userRouter.route('/signup')
.get(function(){
  res.render('signup');
})

.post(function(){
  res.send('user signup received');
});


userRouter.route('/login')
.post(function(req, res){

});

userRouter.route('/logout')
.get(function(req, res){
  req.session.destroy();
  res.redirect('login');
});

module.exports = userRouter;
