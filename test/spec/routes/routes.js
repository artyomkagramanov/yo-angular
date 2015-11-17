'use strict';

describe('Testing Routes', function () {

// load the controller's module
beforeEach(module('blogApp'));

it('should test routes',
inject(function ($route) {

  expect($route.routes['/'].controller).toBe('MainCtrl');
  expect($route.routes['/'].templateUrl).toEqual('views/index/main.html');


  expect($route.routes['/posts'].controller).toBe('PostscontrollerCtrl');
  expect($route.routes['/posts'].templateUrl).toEqual('views/posts/main.html');

  expect($route.routes['/posts/create'].controller).toBe('PostscontrollerCtrl');
  expect($route.routes['/posts/create'].templateUrl).toEqual('views/posts/form.html');

  expect($route.routes['/posts/:postId'].controller).toBe('PostscontrollerCtrl');
  expect($route.routes['/posts/:postId'].templateUrl).toEqual('views/posts/show.html');

  expect($route.routes['/posts/:postId/edit'].controller).toBe('PostscontrollerCtrl');
  expect($route.routes['/posts/:postId/edit'].templateUrl).toEqual('views/posts/form.html');


  expect($route.routes['/categories'].controller).toBe('CategoriescontrollerCtrl');
  expect($route.routes['/categories'].templateUrl).toEqual('views/categories/main.html');

  expect($route.routes['/categories/create'].controller).toBe('CategoriescontrollerCtrl');
  expect($route.routes['/categories/create'].templateUrl).toEqual('views/categories/form.html');

  expect($route.routes['/categories/:categoryId'].controller).toBe('CategoriescontrollerCtrl');
  expect($route.routes['/categories/:categoryId'].templateUrl).toEqual('views/categories/show.html');

  expect($route.routes['/categories/:categoryId/edit'].controller).toBe('CategoriescontrollerCtrl');
  expect($route.routes['/categories/:categoryId/edit'].templateUrl).toEqual('views/categories/form.html');

  

  expect($route.routes[null].redirectTo).toEqual('/');

}));

});