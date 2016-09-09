var app = angular.module('nList.home', []);

app.controller('homeCtrl',function($scope, links, checkUser) {
  var user;
  checkUser.userStatus().success(function(data){
    user = data[0];
  });

  $scope.posts = links.links; //Array of all links from database
  console.log($scope.posts);

  $scope.incrementLike = function(post) {
    post.uid = user.id;
    links.upvote(post); //passing in user id, so a vote can be logged in user_vote table, to prevent dupe voting
  };

  $scope.incrementDislike = function(post) {
    post.uid = user.id;
    links.downvote(post);
  };

  $scope.addPost = function() {
    links.addOne({
      language: $scope.data.language,
      subTopic: $scope.data.topic,
      type: $scope.data.type,
      link: $scope.link,
      keywords: $scope.description,
      likes: $scope.posts.likes || 0,
      dislikes: $scope.posts.dislikes || 0
    });

    $scope.description = '';
    $scope.link = '';
    $scope.topic = null;
    $scope.data.type = null;
    $scope.language = null;
  };

  $scope.setFilter = function(type, value) {
    $scope[type+'Filter'] = {};
    $scope[type+'Filter'][type] = value;
  };




//Selected Options for type, language & topics

//============================================


});
