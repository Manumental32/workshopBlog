'use strict';

var app = angular.module('BlogApp', [
  'ui.router',
  'ngResource',
  'textAngular',
  'LocalStorageModule'
]);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/login');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
            url: '/login',
            templateUrl: 'partial-views/login.html',
            controller: 'LoginController'
        })
        .state('logout', {
            url: '/logout',
            templateUrl: null,
            controller: 'LogoutController'
        })
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('post', {
            url: '/post',
            templateUrl: 'partial-views/post.html',
            controller: 'PostController'
        })
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('post_detail', {
            url: '/post/:id',
            templateUrl: 'partial-views/post-detail.html',
            controller: 'PostController'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
})
// .run(['$rootScope', '$state', '$stateParams',
//   function ($rootScope, $state, $stateParams) {
//     $rootScope.$state = $state;
//     $rootScope.$stateParams = $stateParams;
// }])