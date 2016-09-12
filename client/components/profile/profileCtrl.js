'use strict'

var app = angular.module('nList.profile', ['ngFileUpload']);

app.controller('ProfileController', ['$scope', '$http', 'Upload', '$window', 'checkUser', '$log', function($scope, $http, Upload, $window, checkUser, $log){

  $scope.userUpdate = checkUser.currUser;

  $scope.findPicName = () => {
    let pic = document.getElementById('file').files[0];
    if(pic){
      $scope.picName = pic;
      return pic.name;
    }
  };

  this.submit = () => {
      if (this.upload_form.file.$valid && this.file) {
          this.upload(this.file);
      }
      $scope.findPicName();
  };

  this.upload = file => {
      Upload.upload({
          url: window.location.origin+'/upload',
          data:{file:file}
      });
  };
  
  $scope.editProfile = () => {
    let data = {
      id:$scope.userUpdate.id,
      name: $scope.userUpdate.name,
      email: $scope.userUpdate.email,
      password: $scope.userUpdate.password,
      newPassword: $scope.userUpdate.newPassword,
      photoPath: $scope.findPicName() ? window.location.origin+'/uploads/'+$scope.findPicName() : null
    };
    $http.put('/updateUser', data).success(res => location.reload() );
  };

}])
