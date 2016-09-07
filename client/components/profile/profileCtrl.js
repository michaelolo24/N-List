var app = angular.module('nList.profile', ['ngFileUpload']);

app.controller('ProfileController', [ '$scope', 'Upload','$window', function($scope){

  $scope.findPicName = function (){
    var pic = document.getElementById('file').files[0];
    $scope.picName = pic;
    console.log(pic.name, 'findPicName');
    console.log($scope.picName);
    return pic.name;
  }

  this.submit = function(){
      if (this.upload_form.file.$valid && this.file) {
          this.upload(this.file);
      }
      $scope.findPicName();
  }

  this.upload = function (file) {
      Upload.upload({
          url: 'http://localhost:3000/upload',
          data:{file:file}
      })
  };


}])
