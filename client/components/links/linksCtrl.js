var app = angular.module('nList.links', []);

app.controller('linksCtrl',function($scope) {
  $scope.setFilter = function(type, value) {
    $scope[type+'Filter'] = {};
    $scope[type+'Filter'][type] = value;
}

  $scope.incrementLike = function(post) {
    post.likes++;
  };

  $scope.incrementDislike = function(post) {
    post.dislikes++;
  };

  $scope.addPost = function() {
    var post = {name: $scope.name, description: $scope.description, type: $scope.data.type, language: $scope.data.language, topic:$scope.data.topic, link: $scope.link, likes:0, dislikes:0};
    $scope.posts.push(post);
    $scope.name = '';
    $scope.description = '';
    $scope.link = '';
    $scope.name = '';
    $scope.topic = null;
    $scope.data.type = null;
    $scope.language = null;
  }

//Selected Options for type & language=================
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
      {value: '3', label: 'Ruby'}
    ],
    topic: null,
    topics: [
      {value: '1', label: 'React.js'},
      {value: '2', label: 'Angular.js'},
      {value: '3', label: 'D3'},
      {value: '4', label: 'Backbone.js'},
      {value: '5', label: 'Node.js'},
      {value: '6', label: 'Express.js'},
      {value: '7', label: 'Rest API'},
      {value: '7', label: 'Meteor.js'},
      {value: '8', label: 'Database'},
      {value: '9', label: 'Ember.js'},
      {value: '10', label: 'ES6'},

    ]
   };
  //=====================================================







//Sample data for testing purpose======================
  $scope.posts = [
  {description: 'Learn Angular Routing', type:'Video', language: 'Javascript', topic: 'Angular.js', link: 'http://www.google.com', likes: 5, dislikes: 2},
  {description: 'React and Redux', type:'Blog', language: 'Javascript', topic:'React.js', link: 'http://www.hello.com', likes: 8, dislikes: 1},
  {description: 'Learn Angular Routing', type:'Video', language: 'Javascript', topic: 'D3.js', link: 'http://google.com', likes: 98, dislikes: 1},
  {description: 'Express Routing', type:'Forum', language: 'Javascript', topic:'Express.js', link: 'http://google.com', likes: 8, dislikes: 1},
  {description: 'Learn Angular Routing', type:'Video', language: 'Javascript', topic: 'Node.js', link: 'http://google.com', likes: 5, dislikes: 2},
  {description: 'Intro to C++', type:'Video', language: 'C++', topic:'Random', link: 'http://google.com', likes: 8, dislikes: 1},
  {description: 'C++', type:'Video', language: 'C++', topic:'Random', link: 'http://google.com', likes: 8, dislikes: 1}

  ];
  //=====================================================
});

