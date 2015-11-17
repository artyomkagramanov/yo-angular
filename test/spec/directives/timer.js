'use strict';

describe('Directive: timer', function () {

  // load the directive's module
  beforeEach(module('blogApp'));

  var el, scope, controller ,interval;

 beforeEach(inject(function($compile, $rootScope, $interval) {

    el = angular.element("<timer></timer>");
    interval = $interval;
    
    $compile(el)($rootScope.$new());
    $rootScope.$digest();

  
    controller = el.controller("timer");

    scope = el.isolateScope() || el.scope() ;
  }));


  it("should do something to the scope", function() {
    expect(scope.time).toBe(0);
    expect(scope.timer).toBe(null);
    scope.start();
    interval.flush(1000);
    expect(scope.timer).not.toBe(null);
    expect(scope.time).not.toBe(0);
    scope.stop();
    expect(scope.timer).toBe(null);
    expect(scope.time).not.toBe(0);
    scope.reset();
    expect(scope.timer).toBe(null);
    expect(scope.time).toBe(0);
    
  });
})
