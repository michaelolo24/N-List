var app = angular.module('nList.services', [])

app.factory('links', function($http) {
  var n = {
    links: []
  };

  n.getAll = function() {
    return $http.get('/api/resources')
      .success(function(data) {
      angular.copy(data, n.links);
      });
  };

  n.addOne = function(post) {
    return $http.post('/api/resources', post)
      .success(function(data) {
        n.links.push(data);
        n.getAll();
      });
  };

  n.upvote = function(post) {
    post.likes += 1;
    return $http.put('/api/resources/', post)
      .success(function(data) {
      });
  }

  n.downvote = function(post) {
    post.dislikes += 1;
    return $http.put('/api/resources/', post)
      .success(function(data) {
      });
  }

  return n;

});