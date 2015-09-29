'use strict';
(function() {

function LoginController($scope, $http, $state, localStorageService) {

  	var user = localStorageService.get('localStorageKey');

  	if (user) {
 		$state.go('post');
	};

	$scope.login = function() {
		
  		$http.post('/login', 
  			{username: $scope.username,password: $scope.password}
 			).then(function(response) {
 				// console.log(response);
 				console.log(response.data);

 				if (response.data.error !== 404) {
 					localStorageService.set('localStorageKey',JSON.stringify(response.data));
 					$state.go('post');
 				} else {
 					alert(response.data.message);
 				};
  		});

 	}


}

angular.module('BlogApp')
  .controller('LoginController', LoginController);

})();
