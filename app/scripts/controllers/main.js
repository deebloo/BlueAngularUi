'use strict';

angular.module('blueUiApp')
  .controller('MainCtrl', function ($scope, $http) {
    /*
     * Navbar Data array
     */
    $scope.navbarData = [
      { title: 'home', link: '/' },
      { title: 'foo', link: '/foo' },
      { title: 'bar', link: '/bar' },
      { title: 'baz', link: '/baz' }
    ];

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

    /*
     * Grid Data
     */
    $http.get('json/sample-data.json').success(function(data) {
      $scope.gridData = data;
    })
  });
