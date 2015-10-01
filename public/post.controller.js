'use strict';

angular.module('BlogApp')
  .controller('PostController', function (Post, $scope, $stateParams, $state, $window, localStorageService,$rootScope) {

	$scope.post = ''; 

	var saludo = localStorageService.get('localStorageKey');
	
 	if(saludo) {

		saludo = JSON.parse(saludo);
 		$rootScope.saludo = saludo.username;

 	} else {

	 	$state.go('login');
 	}

	//FUNCION DE CARGA DE POSTS
	$scope.getAllposts = function(){

		$scope.posts = Post.query();

	}

	//FUNCION DE CARGA DE UN POST
	$scope.getPost = function(id){

		$scope.post = Post.get({id:id}, function() {});

	};

	//CONSTRUCTOR DEL CONTROLADOR
    $scope.init = function () {

		var id = $stateParams.id;

	    if (id == undefined) {
		
			$scope.getAllposts();

		} else {

			$scope.getPost(id);

		}
    }

    $scope.init();

    //FUNCION PARA ACTUALIZAR UN POST
	$scope.savePost = function(){

		var id = $stateParams.id;

		Post.update({id:id}, $scope.post).$promise.then(function(response) {

			if(response.$resolved === true) {

				$window.alert('Post actualizado correctamente');
				$state.go('post');

			} else {
				$window.alert('Error');

			}
	    });

	};

	$scope.createPost = function(){

		Post.save($scope.post).$promise.then( function(response) {
			

			if(response.$resolved === true) {

				$scope.posts.push(response);
				$scope.post = ''; 
				
				$window.alert('Post creado correctamente');
				$state.go('post');

			} else {
				$window.alert('Error');
			}
		});

	};

	//FUNCION PARA ELIMINAR UN POST
	$scope.deletePost = function(post){
		
		var confirm = false;
		// confirm = true;
		confirm = $window.confirm('Estas seguro de querer eliminar el post: ' + post.title + '?');
		
		if(confirm) {

			Post.delete({ id : post._id}).$promise.then( function(response) {

				$scope.posts.splice( $scope.posts.indexOf(post), 1 );
			});

		}

	};

});
