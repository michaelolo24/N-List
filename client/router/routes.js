angular.module('nList', ['ui.router', 'nList.links', 'nList.profile'])

.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'components/home/home.html'

    })

    .state('links', {
      url:'/links',
      templateUrl: 'components/links/links.html',
      controller: 'linksCtrl'
    })

    .state('profile', {
        url: '/profile',
        templateUrl: 'components/profile/profile.html',
        controller: 'ProfileController'
    })

});
