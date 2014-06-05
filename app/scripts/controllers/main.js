'use strict';

angular.module('blueUiApp')
  .controller('MainCtrl', function ($scope) {
    // Test data for search options menu
    $scope.searchOptionData = [
      {
        title: 'foo'
      },
      {
        title: 'bar'
      },
      {
        title: 'foobar'
      },
      {
        title: 'baz'
      }
    ];
  });
