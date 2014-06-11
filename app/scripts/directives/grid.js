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
            for(var i = 0; i < scope.data.length; i++) {
              var record = [];

              if(scope.gridModel !== undefined) {
                for (var x = 0; x < scope.gridModel.length; x++) {
                  var prop = scope.gridModel[x].name;

                  record[x] = scope.data[i][prop];
                }

                data.push(record);
              }
            }
          }

          scope.finalData = data;

          return;
        };

        scope.$watch('data', function() {
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
