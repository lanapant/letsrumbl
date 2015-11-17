'use strict';

/**
 * @ngdoc overview
 * @name backofficeApp
 * @description
 * # backofficeApp
 *
 * Main module of the application.
 */
angular
  .module('backofficeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/search/:userId',{
        templateUrl:'views/user-detail.html',
        controller:'UserAccounts'
      }
        )
      
      .otherwise({
        redirectTo: '/'
      });
  });
