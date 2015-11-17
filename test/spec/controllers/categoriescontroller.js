'use strict';

describe('Controller: CategoriescontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('blogApp'));

  var CategoriescontrollerCtrl,
    scope,route,routeParams,CategoriesFactory,location;

  // Initialize the controller and a mock scope
  var $httpBackend;

  var category = { title: "dd" };

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.when('GET', /\.html$/).respond(200,'ok');
    $httpBackend.when('GET', 'http://blogapi.dev/category/20').respond(200,category);

  }));
 
  beforeEach(inject(function ($controller, $rootScope, $route ,$routeParams ,_CategoriesFactory_ ,$location) {
    scope = $rootScope.$new();
    route = $route;
    routeParams = $routeParams;
    CategoriesFactory = _CategoriesFactory_;
    
    location = $location;
    CategoriescontrollerCtrl = $controller('CategoriescontrollerCtrl', {
      $scope: scope,
      $route: route,
      $routeParams: routeParams,
      CategoriesFactory: CategoriesFactory,
      $location: location
      // place here mocked dependencies
    });
  }));

    it(' should test index action', function () {

      var categories = [
        {
          id: 20,
          title: "dd",
          user_id: 1,
          created_at: "2015-10-28 15:11:10",
          updated_at: "2015-10-28 15:11:10"
        }];
      $httpBackend.when('GET', 'http://blogapi.dev/category').respond(200,categories);
      expect(scope.categories).toBeUndefined();
      scope.index();

      $httpBackend.flush();
      
      expect(scope.categories).toEqual(categories);
    });

    it(' should test show action', function () {
      
      expect(scope.category).toBeUndefined();
      scope.show(20);
      $httpBackend.flush();
      expect(scope.category).toEqual(category);
      

    });

    it(' should test edit action', function () {

        expect(scope.categoryData.title).toBeUndefined();
        scope.edit(20);
        $httpBackend.flush();
        expect(scope.categoryData.title).toEqual(category.title);
    });

    it(' should test submit method when we create a category ', function () {

      $httpBackend.when('POST', 'http://blogapi.dev/category').respond(200,{status:'success'});
        location.path('/categories/create');
        scope.submit();
        $httpBackend.flush();
        expect(location.url()).toEqual('/categories');
    });

    it(' should test submit method when we update a category ', function () {

      $httpBackend.when('PUT', 'http://blogapi.dev/category/20').respond(200,{status:'success'});
        location.path('/categories/edit');
        scope.submit(20);
        $httpBackend.flush();
        expect(location.url()).toEqual('/categories');
    });

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CategoriescontrollerCtrl.awesomeThings.length).toBe(3);
  });

  
});
