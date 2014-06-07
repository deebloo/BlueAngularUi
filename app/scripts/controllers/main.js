'use strict';

angular.module('blueUiApp')
  .controller('MainCtrl', function ($scope) {
    /*
     * Search menu data array
     */
    $scope.searchOptionData = [
      { title: 'foo' },
      { title: 'bar' },
      { title: 'foobar' },
      { title: 'baz' }
    ];

    /*
     * Search Menu Item Click function
     * accepts one argument which contains the clicked element
     * (Passed in as an angular.element)
     */
    $scope.searchOptionClick = function(el) {
      console.log( el.text() );
    };
  });
