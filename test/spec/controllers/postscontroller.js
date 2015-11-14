'use strict';

describe('Controller: PostscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('blogApp'));

  var PostscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostscontrollerCtrl = $controller('PostscontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PostscontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
