var app = angular.module('nList.home', []);

app.controller('homeCtrl',function($scope, links) {
  $scope.posts = links.links; //Array of all links from database
  console.log($scope.posts);

  $scope.incrementLike = function(post) {
    console.log(post);
    links.upvote(post);
  };

  $scope.incrementDislike = function(post) {
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
