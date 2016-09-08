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
      console.log('Link added.');
      n.links.push(data);
      console.log(n.links)
    });
  };

  return n;

});