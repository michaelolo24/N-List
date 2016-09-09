var app = angular.module('nList.main', []);

app.controller('MainController', ['$scope','checkUser', function($scope, checkUser){

  checkUser.userStatus().success(function(data){
    $scope.headerUser = data[0];
  });

  $scope.signout = function(){
    checkUser.signout();
  };
}]);
