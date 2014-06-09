'use strict';

angular.module('blueUiApp')
  .directive('grid', function () {
    return {
      templateUrl: 'views/grid.html',
      restrict: 'E',
      scope: {
        data: '='
      },
      //TODO create a 'model' for the grid
      link: function postLink(scope) {
        scope.columnCount = function() {
          var prop, propCount = -1;

          if(scope.data !== undefined) {
            for (prop in scope.data[0]) {
              propCount++;
            }
          }

          return propCount;
        }

        scope.createColumns = function() {
          var length = scope.columnCount();

          return new Array(length < 0 ? length + 1 : length);
        }

        scope.setWidth = function() {
          var columnWidth = 100 / scope.columnCount();

          return { width: columnWidth + '%' }
        }
      }
    };
  });
