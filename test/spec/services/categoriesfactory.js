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
    var incomedata;
    CategoriesFactory.index()
        .success(function(data){
            
            incomedata = data;  
                              
        })
    $httpBackend.flush();
    expect(incomedata).toEqual(categories);
    expect(incomedata[0].id).toBe(categories[0].id)
  });

  it('should receive single category by id', function () {
    var category = {
              id: 20,
              title: "dd",
              user_id: 1,
              created_at: "2015-10-28 15:11:10",
              updated_at: "2015-10-28 15:11:10"
        };

    $httpBackend.when('GET', 'http://blogapi.dev/category/20').respond(category);
    var incomedata;
    CategoriesFactory.show(20)
        .success(function(data){
            
            incomedata = data;  
                              
        })
    $httpBackend.flush();
    expect(incomedata).toEqual(category);
    expect(incomedata.id).toBe(category.id)
  });

  it('should send data for save and income status will be ok', function () {
    var category = {title: "sss"};

    $httpBackend.when('POST', 'http://blogapi.dev/category').respond({status:'success'});
    var status;
    CategoriesFactory.store(category)
        .then(function(response) {
            status = response.data.status;        
        },
        function(response) {
            status = response.data.status; 
        });
    $httpBackend.flush();
    expect(status).toBe('success');
  });

  it('should do something', function () {
    expect(!!CategoriesFactory).toBe(true);
  });

});
