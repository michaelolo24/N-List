'use strict'

var app = angular.module('nList.main', []);

app.controller('MainController', ['$scope','checkUser', ($scope, checkUser) => {

  checkUser.userStatus().success(data => $scope.headerUser = data[0]);

  $scope.signout = () =>  checkUser.signout();

}]);
