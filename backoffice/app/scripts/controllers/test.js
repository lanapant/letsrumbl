'use strict';

/**
 * @ngdoc function
 * @name backofficeApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the backofficeApp
 */
angular.module('backofficeApp')
  .controller('TestCtrl', function ($scope,$http) {
  	$http.get('https://letsrumbl-dev.firebaseio.com/sport/nba/tier/5.json')
  	.success(function(data){
  		var items = Object.keys(data);
  		console.log(items);
  		items.forEach(function(item){
  			document.getElementById('text').innerHTML += "<p> <b>Players ID  </b>"+item+"</p><p><b> Name:</b> "+data[item].first_name+"</p>";
  		})
  	})
  	





 
})





