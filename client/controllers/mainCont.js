var app = angular.module('nList', []);

app.controller('mainCont',function($scope) {

  //Sample Data for Testing Purposes================================
  $scope.posts = [
  {title: 'Angular', upvotes: 5},
  {title: 'Express stuff', upvotes: 2},
  {title: 'Summary Assessment Solution', upvotes: 15},
  {title: 'SQL and Mongodb lllland Oost', upvotes: 9},
  {title: 'BackBone...Not', upvotes: 4}
  ];
  //================================================================

  $scope.incrementUpvotes = function(post) {
    post.upvotes++;
  };

  $scope.addPost = function() {
    var post = {title: $scope.title, link:$scope.link, upvotes:0};
    $scope.posts.push(post);
    $scope.title = '';
    $scope.link = '';
  }


});