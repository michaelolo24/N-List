var app = angular.module('nList.home', []);

app.controller('homeCtrl',function($scope, links, checkUser) {
  var user;
  checkUser.userStatus().success(function(data){
    user = data[0];
  });

  $scope.posts = links.links; //Array of all links from database
  $scope.languages = links.languages;

  $scope.incrementLike = function(post) {
    post.uid = user.id;
    links.upvote(post); //passing in user id, so a vote can be logged in user_vote table, to prevent dupe voting
  };

  $scope.incrementDislike = function(post) {
    post.uid = user.id;
    links.downvote(post);
  };

  $scope.setFilter = function(type, value) {
    $scope[type+'Filter'] = {};
    $scope[type+'Filter'][type] = value;
  };




//Selected Options for type, language & topics

//============================================


});
