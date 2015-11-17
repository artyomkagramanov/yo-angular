'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:CategoriescontrollerCtrl
 * @description
 * # CategoriescontrollerCtrl
 * Controller of the blogApp
 */
angular.module('blogApp')
.controller('CategoriescontrollerCtrl', ['$scope','$route','$routeParams','CategoriesFactory','$location', CategoriescontrollerCtrl]);

function CategoriescontrollerCtrl($scope,$route,$routeParams,categories_service,$location) 
{ 
   $scope.location = $location.url();
   var location = $scope.location ;
   var id = $routeParams.categoryId ? $routeParams.categoryId : undefined;
   this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.index = index;
    $scope.edit = edit;
    $scope.show = show;
    $scope.submit = submit;
    $scope.deleteCategory = deleteCategory;
    $scope.categoryData = {title:undefined};


    switch(location) 
    {
        case '/categories' : $scope.index() ; break ;
        case '/categories/' + id + '/edit'    : $scope.edit(id) ; break ;
        case '/categories/' + id : $scope.show() ; break ;
    }

    
/////////////////////////////////////////////////// tested
    function index() 
    {
        categories_service.index()
            .then(function(response){
                $scope.categories = response.data;  
            });
    }

    function submit(id) {
        
    if($location.url() == "/categories/create") {
        categories_service.store( $scope.categoryData )
        .then(function(response) {
            if (response.data.status == "success") {
                $location.path('/categories');
            }
        },
        function(response) {
            console.log(response.data.title);
            $scope.alerts = { errors : response.data.title }
        }); 
    }   
    else{
            categories_service.update( id , $scope.categoryData )
            .then(function(data){
                if(data.data.status == "success") {
                   $location.path('/categories'); 
                }
                else {

                }
            });
        }   
    }


/////////////////////////////////////////////// tested
   function edit(id) {
    categories_service.show( id )
    .success(function(data) {
        $scope.categoryData.title = data.title
        })
   }    
/////////////////////////////////////////////////// tested
    function show(id) 
    { 
        categories_service.show(id)
        .success(function(data){
            $scope.category = data;                        
        })                    
    } 

    function deleteCategory(id){
        categories_service.delete( id )
        .success(function() {
            $route.reload(); 
        })
    }    

}
