'use strict';
(function() {

function LogoutController($scope, $state, localStorageService) {

  	localStorageService.remove('localStorageKey');

 		$state.go('login');

}

angular.module('BlogApp')
  .controller('LogoutController', LogoutController);

})();
