'use strict';

describe('Service: PostsFactory', function () {

  // load the service's module
  beforeEach(module('blogApp'));

  // instantiate service
  var PostsFactory;
  beforeEach(inject(function (_PostsFactory_) {
    PostsFactory = _PostsFactory_;
  }));

  it('should do something', function () {
    expect(!!PostsFactory).toBe(true);
  });

});
