'use strict';

describe('Controller: CategoriescontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('blogApp'));

  var CategoriescontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CategoriescontrollerCtrl = $controller('CategoriescontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CategoriescontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
