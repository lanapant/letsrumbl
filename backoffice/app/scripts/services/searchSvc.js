'use strict';

/**
 * @ngdoc function
 * @name backofficeApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the backofficeApp
 */
angular.module('backofficeApp').factory('SearchSvc',
   

   function ($http) { 
  
       var userSearchUrl="http://blablabla.com/_username_.json";

        return {
          userSearch: userSearchFn
       }


   function userSearchFn(userObj, cbFn) {
       loadData(buildUserSearchUrl(userObj), cbFn);
    } 

   function buildUserSearchUrl(userObj) {
      return userSearchUrl.replace('_username_',userObj.username).replace('_email_', userObj.email);
    }

   function loadData(userUrl, cbFn) {
    $http.get(userUrl).success(cbFn);
   }
   
              
  
})


 

