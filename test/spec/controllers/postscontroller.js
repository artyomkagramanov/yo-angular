'use strict';

describe('Controller: PostscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('blogApp'));

  var PostscontrollerCtrl,
    scope,route,routeParams,CategoriesFactory,PostsFactory,location;

  // Initialize the controller and a mock scope
  var $httpBackend;
  var categories = [
  {
    id: 20,
    title: "dd",
    user_id: 1,
    created_at: "2015-10-28 15:11:10",
    updated_at: "2015-10-28 15:11:10"
  }];
  var post = {
              id: 26,
              title: "s",
              user_id: 1,
              description: "s",
              image: "default.jpg",
              created_at: "2015-10-28 15:53:09",
              updated_at: "2015-10-28 15:53:09",
              categories: [ ],
              categories_ids: [ ]
              };
  // Initialize the controller and a mock scope

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.when('GET', /\.html$/).respond(200,'ok');
    $httpBackend.when('GET', 'http://blogapi.dev/post/20').respond(200,post);

  }));

  beforeEach(inject(function ($controller, $rootScope, $route ,$routeParams ,_CategoriesFactory_ , _PostsFactory_, $location) {
    scope = $rootScope.$new();
    route = $route;
    routeParams = $routeParams;
    CategoriesFactory = _CategoriesFactory_;
    PostsFactory = _PostsFactory_;
    
    location = $location;
    PostscontrollerCtrl = $controller('PostscontrollerCtrl', {
      $scope: scope,
      $route: route,
      $location: location,
      $routeParams: routeParams,
      PostsFactory: PostsFactory,
      CategoriesFactory: CategoriesFactory
      // place here mocked dependencies
    });
  }));

  it(' should test index action', function () {

      var posts = [
        {
          id: 26,
          title: "s",
          user_id: 1,
          description: "s",
          image: "default.jpg",
          created_at: "2015-10-28 15:53:09",
          updated_at: "2015-10-28 15:53:09",
          categories: [ ]
        }];
      $httpBackend.when('GET', 'http://blogapi.dev/post').respond(200,posts);
      expect(scope.posts).toBeUndefined();
      scope.index();

      $httpBackend.flush();
      
      expect(scope.posts).toEqual(posts);
    });

    it(' should test show action', function () {
      
      expect(scope.post).toBeUndefined();
      scope.show(20);
      $httpBackend.flush();
      expect(scope.post).toEqual(post);
      

    });

    it(' should test edit action', function () {
        $httpBackend.when('GET', 'http://blogapi.dev/category').respond(200,categories);
        expect(scope.postData).toBeUndefined();
        expect(scope.categories).toBeUndefined();
        scope.edit(20);
        $httpBackend.flush();
        expect(scope.categories).toEqual(categories);
        expect(scope.postData).toEqual(post);
    });

    it(' should test submit method when we create a post ', function () {

      $httpBackend.when('POST', 'http://blogapi.dev/post').respond(200,{status:'success'});
        location.path('/posts/create');
        scope.submit();
        $httpBackend.flush();
        expect(location.url()).toEqual('/posts');
    });

    it(' should test submit method when we update a post ', function () {

      $httpBackend.when('PUT', 'http://blogapi.dev/post/20').respond(200,{status:'success'});
        location.path('/posts/edit');
        scope.submit(20);
        $httpBackend.flush();
        expect(location.url()).toEqual('/posts');
    });
});
