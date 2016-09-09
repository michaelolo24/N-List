angular.module('nList', ['nList.services', 'nList.home', 'nList.main','ui.router', 'nList.links', 'nList.profile'])

.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'components/home/home.html',
      controller: 'homeCtrl',
      resolve: {
        linkPromise : ['links', function(links){
          return links.getAll();
        }]
      }
    })
    .state('links', {
      url:'/links',
      templateUrl: 'components/links/links.html',
      controller: 'linksCtrl',
      resolve: {
        checkUser : ['checkUser', function(checkUser){
          return checkUser.userStatus();
        }]
      }
    })
    .state('profile', {
        url: '/profile',
        templateUrl: 'components/profile/profile.html',
        controller: 'ProfileController',
        resolve: {
          checkUser : ['checkUser', function(checkUser){
            return checkUser.userStatus();
          }]
        }
    });

});
