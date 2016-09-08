var app = angular.module('nList.services', [])

app.factory('links', function($http) {
  var n = {
    links: []
  };

  n.getAll = function() {
    return $http.get('/resources')
      .success(function(data) {
      angular.copy(data, n.links);
      });
  };

  n.addOne = function(post) {
    return $http.post('/resources', post)
      .success(function(data) {
        n.links.push(data);
        n.getAll();
      });
  };

  n.upvote = function(post) {
    post.likes += 1;
    return $http.put('/resources', post)
      .success(function(data) {
      });
  };

  n.downvote = function(post) {
    post.dislikes += 1;
    return $http.put('/resources', post)
      .success(function(data) {
      });
  };

  return n;

});


//  USERS FACTORY FOR CHECKING WHETHER A USER IS LOGGED IN

app.factory('checkUser', function($http, $window) {
    var checkUser = {
      currUser: {}
    };

  checkUser.userStatus = function () {
    return $http.get('/updateUser')
    .success(function(data) {
      checkUser.currUser = data[0];
     //angular.copy(data, checkUser.currUser);
    });
  };

return checkUser;

});

