'use strict';

angular.module('BlogApp')
  .controller('LoginController', function ($scope, $rootScope, $http, $state, localStorageService) {

	//CHEQUEO EL USUARIO SE LOGEÓ
	var saludo = localStorageService.get('localStorageKey');
	
 	if(saludo) {
		saludo = JSON.parse(saludo);
 		$rootScope.saludo = saludo.username;
	 	$state.go('post');

 	} else {

	 	$state.go('login');
 	}
 	

 	//FUNCIÓN DE LOGIN
	$scope.login = function() {
		
  		$http.post('/login', {username: $scope.username,password: $scope.password }).then(function(response) {
 				// console.log(response);

 				if (response.data.error !== 404) {
 					localStorageService.set('localStorageKey',JSON.stringify(response.data));
 					$state.go('post');
 				} else {
 					alert(response.data.message);
 				};
  		});

 	}


});
