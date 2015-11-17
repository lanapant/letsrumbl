'use strict';

/**
 * @ngdoc function
 * @name backofficeApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the backofficeApp
 */
angular.module('backofficeApp') .controller('SearchCtrl',
   function loadUserSearch ($scope,SearchSvc) {
	
		function loadData() {
           SearchSvc.userSearch({username: $scope.username,  email: $scope.email, firstName: $scoep.firstName}, UserDataLoadedSuccess); 
  		}
   
  		function UserDataLoadedSuccess (data) {
     	  $scope.userInfo = data;
    	}

        loadData(UsernameUrl);
  
})
  	



 

