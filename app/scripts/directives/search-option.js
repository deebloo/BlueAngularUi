'use strict';

angular.module('blueUiApp')
  .directive('searchOption', function () {
    return {
      templateUrl: 'views/search-option.html',
      restrict: 'E',
      scope: {
        data: '=',
        searchable: '=',
        customClick: '=itemClick'
      },
      link: function postLink(scope) {
        scope.search = '';

        scope.currentOption = 'Select Option';

        scope.preventClose = function($event) {
          $event.stopPropagation();
        };

        scope.selectOption = function($event, currentItem) {
          $event.preventDefault();

          scope.currentOption = currentItem;

          if(scope.customClick !== undefined) {
            scope.customClick(angular.element($event.target));
          }
        };
      }
    };
  });
