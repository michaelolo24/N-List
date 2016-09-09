var app = angular.module('nList.services', []);

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
  n.touched = false;

  n.upvote = function(post) {
    if(!n.touched){
      post.likes += 1;
      n.touched = true;
    }
    return $http.put('/resources', post)
    .success(function(data) {
    });
  };

  n.dTouched = false;
  
  n.downvote = function(post) {
    if(!n.dTouched){
      post.dislikes += 1;
      n.dTouched = true;
    }
    return $http.put('/resources', post)
      .success(function(data) {
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
      if(window.location.href !== 'http://localhost:3000/#/home'){
        if(status === 401){
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
