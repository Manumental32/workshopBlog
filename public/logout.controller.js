'use strict';

angular.module('BlogApp')
  .controller('LogoutController', function LogoutController($scope, $state, localStorageService) {

  	localStorageService.remove('localStorageKey');

 		$state.go('login');

});
