var app = angular.module('nList.profile', ['ngFileUpload']);

app.controller('ProfileController', ['$scope', '$http', 'Upload', '$window', 'checkUser', '$log', function($scope, $http, Upload, $window, checkUser, $log){

  $scope.userUpdate = checkUser.currUser;

  console.log("***checkUser****",$scope.userUpdate);


  //Reroute user if not logged in;
  // if($scope.userUpdate === undefined){
  //   $window.location.href="/login";
  // }
  //load();


  $scope.findPicName = function (){
    var pic = document.getElementById('file').files[0];
    $scope.picName = pic;
    console.log(pic.name, 'findPicName');
    console.log($scope.picName);
    return pic.name;
  };

  this.submit = function(){
      if (this.upload_form.file.$valid && this.file) {
          this.upload(this.file);
      }
      $scope.findPicName();
  };

  this.upload = function (file) {
      Upload.upload({
          url: 'http://localhost:3000/upload',
          data:{file:file}
      });
  };

  $scope.editProfile = function(){
    var data = {
      id:$scope.userUpdate.id,
      name: $scope.userUpdate.name,
      email: $scope.userUpdate.email,
      password: $scope.userUpdate.password,
      photoPath: 'http://localhost:3000/uploads/'+$scope.findPicName()
    };
    $http.put('/updateUser', data).success(function(res){
      //place photo back up here
      load();
      console.log(res);
    });
  };

}])
