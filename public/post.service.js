'use strict';

// https://docs.angularjs.org/api/ngResource/service/$resource

angular.module('BlogApp')
  .service('Post', function ($resource) {

    var PostApi = $resource('/post/:id', 
    					{ id: '@id' }, 
    					{'update': { method: 'PUT' }}
    				);

    return PostApi;
});
