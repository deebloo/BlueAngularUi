'use strict';

angular.module('blueUiApp')
  .directive('grid', function () {
    return {
      templateUrl: 'views/grid.html',
      restrict: 'E',
      scope: {
        data: '=',
        gridModel: '='
      },
      link: function postLink(scope) {
        scope.finalData = [];

        scope.gridData = function() {
          var data = [];

          if(scope.data !== undefined) {
            for(var y = 0; y < scope.data.length; y++) {
              var record = {};

              if(scope.gridModel !== undefined) {
                for (var i = 0; i < scope.gridModel.length; i++) {
                  var prop = scope.gridModel[i].name;

                  record[prop] = scope.data[y][prop];
                }

                data.push(record);
              }
            }
          }

          scope.finalData = data;

          return;
        };

        scope.$watch('data', function() {
          console.log('I');
          scope.gridData();
        });

        /*
         * Get the number of columns to be created
         */
        scope.columnCount = function() {
          var propCount = -1;

          if(scope.gridModel !== undefined) {
            for(var i = -1; i < scope.gridModel.length; i++) {
              propCount++;
            }
          } else {
            console.error('grid model must be defined');
          }

          return propCount;
        };

        /*
         * Set the width for the columns.
         * Take the number of columns and divide it by 100
         */
        scope.setWidth = function() {
          var columnWidth = 100 / scope.columnCount();

          return { width: columnWidth + '%' };
        };
      }
    };
  });
