'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:PostscontrollerCtrl
 * @description
 * # PostscontrollerCtrl
 * Controller of the blogApp
 */


  angular.module('blogApp')
.controller('PostscontrollerCtrl', ['$scope','$route','$location','$routeParams','PostsFactory','CategoriesFactory',PostscontrollerCtrl]);
    
function PostscontrollerCtrl($scope,$route,$location,$routeParams,posts_service,categories_service)
{ 


   var location = $location.url();
   var id = $routeParams.postId;


    $scope.index = index;
    $scope.create = create;
    $scope.show = show;
    $scope.edit = edit;
    $scope.submit = submit;
    $scope.deletePost = deletePost;
    $scope.selectPostsByCategoryId = selectPostsByCategoryId;

    switch(location) 
    {
        case '/posts' :  $scope.index() ; break ;
        case '/posts/create'  :  $scope.create() ; break ;
        case '/posts/' + id + '/edit'    :  $scope.edit(id) ; break ;
        case 'posts/' + id :  $scope.show(id);
    }

    

    function selectPostsByCategoryId(){
        if($scope.postData.categories_ids){
            posts_service.getPostsByCategoryIds($scope.postData.categories_ids)
            .success(function(data){
                $scope.posts = data;                        
            })
        }

    }

    function index() {
        
		posts_service.index()
        .then(function(response){
            $scope.posts = response.data;  
        });
        
	}



    function create() {

        categories_service.index()
        .success(function(data){
            $scope.categories = data;                        
        })
    }

	function show(id) {
		posts_service.show(id)
        .success(function(data){
            $scope.post = data;                        
        })           
	}

    function edit(id) {
        create();
        posts_service.show( id )
        .success(function(data) {
            $scope.postData=data;
        })
    }




    function submit(id) { 

        
        var inputs = $scope.postData;
        if($location.url() == "/posts/create") {
            posts_service.store(inputs).then(function(response){
                if (response.data.status == "success")  {
                        $location.path('/posts');
                }
                else {
                        $scope.alerts = { errors : response.data.title };
                }
            },
            function(response){
                $scope.alerts = { errors : response.data };
           }); 
        }
        else {
                posts_service.update(id, inputs)
                .then(function(data){
                    if(data.data.status == "success") {
                        $location.path('/posts');
                    }
            });
        }   
    }

    function deletePost(id){
        posts_service.delete(id)
        .success(function() {
            $route.reload();
        })
    }

}
