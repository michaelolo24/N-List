var app = angular.module('nList.links', []);

app.controller('linksCtrl',function($scope, links, checkUser) {
  $scope.posts = links.links;
  console.log($scope.posts)

  $scope.incrementLike = function(post) {
    console.log(post);
    links.upvote(post);
  };

  $scope.incrementDislike = function(post) {
    links.downvote(post);
  };

  $scope.addPost = function() {
    links.addOne({
      title: $scope.title,
      language: $scope.data.name,
      subTopic: $scope.data.topic,
      type: $scope.data.type,
      link: $scope.link,
      keywords: $scope.description,
      likes: $scope.posts.likes || 0,
      dislikes: $scope.posts.dislikes || 0
    });
    $scope.title='';
    $scope.description = '';
    $scope.link = '';
    $scope.data.topic = null;
    $scope.data.type = null;
    $scope.data.name = null;
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
    name: null,
    languageOptions: [
      {value: '1', label: 'Javascript'},
      {value: '2', label: 'C++'},
      {value: '3', label: 'Java '},
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
