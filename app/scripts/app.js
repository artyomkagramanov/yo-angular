'use strict';

/**
 * @ngdoc overview
 * @name blogApp
 * @description
 * # blogApp
 *
 * Main module of the application.
 */
angular
  .module('blogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/posts', {
        templateUrl: 'views/posts/main.html',
        controller: 'PostsController'
      }).
      when('/posts/create', {
        templateUrl: 'views/posts/form.html',
        controller: 'PostsController'
      }).
      when('/posts/:postId', {
        templateUrl: 'views/posts/show.html',
        controller: 'PostsController'
      }).
      when('/posts/:postId/edit', {
        templateUrl: 'views/posts/form.html',
        controller: 'PostsController'
      }).
      when('/categories', {
        templateUrl: 'views/categories/main.html',
        controller: 'CategoriesController'
      }).
      when('/categories/create', {
        templateUrl: 'views/categories/form.html',
        controller: 'CategoriesController'
      }).
      when('/categories/:categoryId', {
        templateUrl: 'views/categories/show.html',
        controller: 'CategoriesController'
      }).
      when('/categories/:categoryId/edit', {
        templateUrl: 'views/categories/form.html',
        controller: 'CategoriesController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
