'use strict';

//SERVICIO REST UTILIZANDO ANGULAR-RESOURCE
angular.module('BlogApp')
  .service('Post', function ($resource) {

    var PostApi = $resource('/post/:id', 
    					{ id: '@id' }, 
    					{'update': { method: 'PUT' }} //NOTA: El método default es POST
    				);

    return PostApi;
});


// https://docs.angularjs.org/api/ngResource/service/$resource
