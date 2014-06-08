'use strict';

angular.module('blueUiApp')
  .directive('grid', function () {
    return {
      templateUrl: 'views/grid.html',
      restrict: 'E',
      link: function postLink(scope) {
       //element.text('this is the grid directive');
      }
    };
  });
