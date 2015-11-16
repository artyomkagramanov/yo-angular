'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:FilecontrollerCtrl
 * @description
 * # FilecontrollerCtrl
 * Controller of the blogApp
 */
angular.module('blogApp').controller('FilecontrollerCtrl', ['$scope', '$http','$location','$routeParams',function($scope,$http,$location,$routeParams){ 

$scope.file = {} //Модель
this.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
];
$scope.options = {
  //Вызывается для каждого выбранного файла
  change: function (file) {
      //В file содержится информация о файле
      //Загружаем на сервер
      file.$upload('http://blogapi.dev/post/image-upload', $scope.file).then(function(data){
      		$scope.postData.image = data.data.image_name;

      });
      
    }
  };


}]);