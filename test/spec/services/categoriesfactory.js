'use strict';

describe('Service: CategoriesFactory', function () {

  // load the service's module
  beforeEach(module('blogApp'));

  // instantiate service
  var CategoriesFactory;
  var $httpBackend;
  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');

  }));

  beforeEach(inject(function (_CategoriesFactory_) {
    CategoriesFactory = _CategoriesFactory_;
  }));


  it('should receive some categories', function () {
    var categories = [
      {
        id: 20,
        title: "dd",
        user_id: 1,
        created_at: "2015-10-28 15:11:10",
        updated_at: "2015-10-28 15:11:10"

      }
    ];
    $httpBackend.when('GET', 'http://blogapi.dev/category').respond(categories);
    var datas;
    CategoriesFactory.index()
        .success(function(data){
            
            datas = data;  
                              
        })
    $httpBackend.flush();
    expect(datas[0].id).toBe(categories[0].id)
  });
  it('should do something', function () {
    expect(!!CategoriesFactory).toBe(true);
  });

});
