var app = angular.module('nList.links', []);

app.controller('linksCtrl',function($scope) {

  ///////////////////Sample Data for Testing Purposes///////////////////
  $scope.posts = [
  {name: 'neekon', title: 'Learn Angular Routing', type:'video', language: 'angular js', link: 'www.google.com', likes: 5, dislikes: 2},
  {name: 'kent', title: 'React and Redux', type:'blog', language: 'react js', link: 'www.hello.com', likes: 8, dislikes: 1}
  ];
  //////////////////////////////////////////////////////////////////////

  $scope.incrementLike = function(post) {
    post.likes++;
  };

  $scope.incrementDislike = function(post) {
    post.dislikes++;
  };

  $scope.addPost = function() {
    var post = {name: $scope.name, title: $scope.title, type: $scope.link, language: $scope.language, $scope.link, likes:0, dislikes:0};
    $scope.posts.push(post);
    $scope.name = '';
    $scope.title = '';
    $scope.link = '';
    $scope.name = '';
    $scope.type = '';
    $scope.language = '';
  }


});
