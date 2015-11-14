'use strict';

/**
 * @ngdoc service
 * @name blogApp.CategoriesFactory
 * @description
 * # CategoriesFactory
 * Factory in the blogApp.
 */
angular
    .module('blogApp')
    .factory('categories_service', ['$http', function($http) {

      return {
        index: function() {
          //console.log($http.get("/category"))

           return $http.get("http://blogapi.dev/category");
        },
        show: function(id) {
           return $http.get("http://blogapi.dev/category/"+id);
        },
        store : function( data ) {
          return $http.post('http://blogapi.dev/category', data);
        },
        update: function( id , data ) {
          return $http.put('http://blogapi.dev/category/' + id , data);
        },
        delete: function( id ) {
          return $http.delete('http://blogapi.dev/category/' + id );
        }
        
      }     
    }]);