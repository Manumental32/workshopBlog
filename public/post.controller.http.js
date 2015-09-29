'use strict';

(function() {

function PostController($scope, $http, $stateParams, $state, $window,localStorageService, $rootScope, Post) {

	$scope.posts = '';

	//FUNCION DE CARGA DE POSTS
	$scope.loadPosts = function(){

		$scope.posts = Post.query();

		// $http.get('/Post').
		// 	then(function(response) {
		// 		$scope.posts = response.data;
		// });

	}

	//FUNCION DE CARGA DE UN POST
	$scope.loadPost = function(id){

		$scope.post = Post.get({id:id}, function() {});

		// $http.get('/post/' + id ).
		// 	then(function(response) {
		// 		console.log(response);
		// 		$scope.post = response.data;
		// });

	};

	//CONSTRUCTOR DEL CONTROLADOR
    $scope.init = function () {

		var id = $stateParams.id;

	    if (id == undefined) {
		
			$scope.loadPosts();

		} else {

			$scope.loadPost(id);

		}
    }

    $scope.init();

    //FUNCION PARA ACTUALIZAR UN POST
	$scope.savePost = function(){

		var id = $stateParams.id;

		Post.update({id:id}, $scope.post).$promise.then(function(response) {
			console.log(response);
			
			console.log('save');
 			$scope.post = response;
			// $state.go('post');
			// $state.go('post_detail', { id : post._id});
	    });

		// $http.put('/post/' + post._id , post).
		// 	then(function(response) {

 	// 			if (response.data.error !== 404) {
 	// 				console.log('save');
 					
 	// 				// $state.go('post');
 	// 				$state.go('post_detail', { id : post._id});
 	// 			} else {
 	// 				alert(response.data.message);
 	// 			};
		// });

	};

	$scope.createPost = function(){

		// console.log($scope.post);
		
    	// $scope.post = new Post();
    	// console.log($scope.post);
    	
		Post.save($scope.post).$promise.then( function(response) {
			console.log(response);
			
			console.log(response);
			$scope.posts.push(response);
			$scope.post = '';
			console.log('create');

		});

		// $http.post('/post' , postNew).
		// 	then(function(response) {

 	// 			if (response.data.error !== 404) {
 	// 				console.log(response.data);
 	// 				$scope.posts.push(postNew);
 	// 				$scope.post = '';
 	// 				console.log('create');
 					
 					
 	// 			} else {
 	// 				alert(response.data.message);
 	// 			};
		// });

	};

	//FUNCION PARA ELIMINAR UN POST
	$scope.deletePost = function(post){
		console.log(post);
		var confirm = false;
		confirm = true;
		confirm = $window.confirm('Estas seguro de querer eliminar el post' + post.title + '?');
		
		if(confirm) {

			Post.delete({ id : post._id}).$promise.then( function(response) {

				$scope.posts.splice( $scope.posts.indexOf(post), 1 );
				// $state.go('post', {}, { reload: true });
			});

			// $http.delete('/post/' + post._id , post).
			// 	then(function(response) {

	 	// 			if (response.data.error !== 404) {
			// 			$scope.posts.splice( $scope.posts.indexOf(post), 1 );
	 	// 				// $state.go('post', {}, { reload: true });
	 	// 			} else {
	 	// 				alert(response.data.message);
	 	// 			};
			// });
		}

	};



	var saludo = localStorageService.get('localStorageKey');
	
 	if(saludo) {
		saludo = JSON.parse(saludo);
 		$rootScope.saludo = saludo.username;
 	}

}

angular.module('BlogApp')
  .controller('PostController', PostController);

})();