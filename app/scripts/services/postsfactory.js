'use strict';

/**
 * @ngdoc service
 * @name blogApp.PostsFactory
 * @description
 * # PostsFactory
 * Factory in the blogApp.
 */
angular
    .module('blogApp')
    .factory('posts_service', ['$http', function($http) {
      return {
        index: function() {
           return $http.get("http://blogapi.dev/post");
        },
        show: function(id) {
           return $http.get("http://blogapi.dev/post/"+id);
        },
      store : function( data ) {
        //console.log(data)
        return $http.post('http://blogapi.dev/post', data);
      },
      update : function( id , data ) {
        return $http.put('http://blogapi.dev/post/' + id , data);
      },
      delete : function( id ) {
        return $http.delete('http://blogapi.dev/post/' + id );
      },
      getPostsByCategoryIds : function( ids ) {
        return $http.get('http://blogapi.dev/posts/' + ids );
      }
        
      }     
    }]);