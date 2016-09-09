var app = angular.module('nList.main', []);

app.controller('MainController', ['$scope', 'checkUser', function($scope, checkUser){
  checkUser.userStatus();
  $scope.signout = function(){
    checkUser.signout();
  };
}]);
