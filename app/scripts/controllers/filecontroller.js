'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:FilecontrollerCtrl
 * @description
 * # FilecontrollerCtrl
 * Controller of the blogApp
 */
angular.module('blogApp').controller('FileController', ['$scope', '$http','$location','$routeParams','posts_service','categories_service', function($scope,$http,$location,$routeParams,posts_service,categories_service){ 

$scope.file = {} //Модель
$scope.options = {
  //Вызывается для каждого выбранного файла
  change: function (file) {
      //В file содержится информация о файле
      //Загружаем на сервер
      console.log(file)
      file.$upload('http://blogapi.dev/post/image-upload', $scope.file).then(function(data){
      		$scope.postData.image = data.data.image_name;

      		//alert($scope.file.filename)
      });
      
    }
  }


}]);