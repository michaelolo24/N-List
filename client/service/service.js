var app = angular.module('nList.services', []);

app.factory('links', function($http) {
  var n = {
    links: [],
    languages: []
  };

  n.getAll = function() {
    return $http.get('/resources')
      .success(function(data) {
      angular.copy(data, n.links);
      });
  };

  n.getLanguages = function() {
    return $http.get('/langResources')
      .success(function(data) {
      angular.copy(data, n.languages);
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
    post.vote = 1;
    return $http.put('/resources', post)
    .success(function(data) {
      n.getAll();
    });
  };


  n.downvote = function(post) {
    post.vote = 0;
    return $http.put('/resources', post)
      .success(function(data) {
        n.getAll();
      });
  };

  return n;

});


//  USERS FACTORY FOR CHECKING WHETHER A USER IS LOGGED IN

app.factory('checkUser', function($http, $window) {
    var checkUser = {
      currUser: false
    };

  checkUser.userStatus = function () {
    return $http.get('/updateUser')
    .success(function(data) {
      checkUser.currUser = data[0];
    }).error(function(res, status){
if(window.location.href !== window.location.origin+'/#/home' && window.location.href !== window.location.origin+'/#/about' && status === 401){        if(status === 401){
          console.log(window.location.href);
          $window.location.href="/login";
        }
      }
    });
  };

  checkUser.signout = function(){
    return $http.post('/logout')
    .success(function(data){
      $window.location.href="/login";
    });
  };

  return checkUser;

});
