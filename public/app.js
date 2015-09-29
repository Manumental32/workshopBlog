'use strict';

// MODULOS A NUESTRA APP
var app = angular.module('BlogApp', [
  'ui.router',
  'ngResource',
  'textAngular',
  'LocalStorageModule'
]);

// CONFIGURACIÓN DE LOS ESTADOS POSIBLES DE NAVEGACIÓN
app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/post'); //DEFAULT
    
    $stateProvider
        
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
        
        .state('post', {
            url: '/post',
            templateUrl: 'partial-views/post.html',
            controller: 'PostController'
        })
        
        .state('post_detail', {
            url: '/post/:id',
            templateUrl: 'partial-views/post-detail.html',
            controller: 'PostController'
        })
        
        .state('workshop', {
            url: '/workshop',
            templateUrl: 'partial-views/workshop.html',
        });
        
})