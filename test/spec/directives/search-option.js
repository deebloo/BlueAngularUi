'use strict';

describe('Directive: searchOption', function () {

  // load the directive's module
  beforeEach(module('blueUiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<search-option></search-option>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the searchOption directive');
  }));
});
