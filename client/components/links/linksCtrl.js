var app = angular.module('nList.links', []);

app.controller('linksCtrl',function($scope, links) {
  $scope.posts = links.links;


  $scope.incrementLike = function(post) {
    console.log(post);
    links.upvote(post);
  };

  $scope.incrementDislike = function(post) {
    links.downvote(post);
  };

  $scope.addPost = function() {
    links.addOne({
      language: $scope.data.language,
      subTopic: $scope.data.topic,
      type: $scope.data.type,
      link: $scope.link,
      keywords: $scope.description,
      likes: $scope.posts.likes || 0,
      dislikes: $scope.posts.dislikes || 0
    });

    $scope.description = '';
    $scope.link = '';
    $scope.topic = null;
    $scope.data.type = null;
    $scope.language = null;
  };

  $scope.setFilter = function(type, value) {
    $scope[type+'Filter'] = {};
    $scope[type+'Filter'][type] = value;
  };




//Selected Options for type, language & topics==
  $scope.data = {
    type: null,
    typeOptions: [
      {value: '1', label: 'Forum'},
      {value: '2', label: 'Article'},
      {value: '3', label: 'Video'}
    ],
    language: null,
    languageOptions: [
      {value: '1', label: 'Javascript'},
      {value: '2', label: 'C++'},
      {value: '3', label: 'Java'},
      {value: '4', label: 'C#'},
      {value: '5', label: 'Python'},
      {value: '6', label: 'Ruby/Rails'}
    ],
    topic: null,
    topics: [
      {value: '1', label: 'Front-End'},
      {value: '2', label: 'REST APIs'},
      {value: '3', label: 'Database'},
      {value: '4', label: 'Back-End'},
    ]
   };
//=================================================


});
