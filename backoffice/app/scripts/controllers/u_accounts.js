'use strict';

/**
 * @ngdoc function
 * @name backofficeApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the backofficeApp
 */
angular.module('backofficeApp')
  .controller('UserAccounts', function ($scope,$routeParams) {
    $scope.userId = $routeParams.userId;


 
})
  	
