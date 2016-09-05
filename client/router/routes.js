angular.module('nList', ['ui.router', 'nList.links'])

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


});