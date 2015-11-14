'use strict';

describe('Service: CategoriesFactory', function () {

  // load the service's module
  beforeEach(module('blogApp'));

  // instantiate service
  var CategoriesFactory;
  beforeEach(inject(function (_CategoriesFactory_) {
    CategoriesFactory = _CategoriesFactory_;
  }));

  it('should do something', function () {
    expect(!!CategoriesFactory).toBe(true);
  });

});
