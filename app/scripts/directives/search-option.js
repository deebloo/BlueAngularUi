'use strict';

angular.module('blueUiApp')
  .directive('searchOption', function () {
    return {
      templateUrl: 'views/search-option.html',
      restrict: 'E',
      scope: {
        data: '=',
        searchable: '=',
        customClick: '=itemClick',
        optionTitle: '='
      },
      link: function postLink(scope) {
        /*
         * Sets default filter to blank
         */
        scope.search = '';

        /*
         * Sets the currently selected option to the option title.
         */
        scope.currentOption = scope.optionTitle;

        /*
         * Prevents the menu from closing when clicking on the text box
         */
        scope.preventClose = function($event) {
          $event.stopPropagation();
        };

        /*
         * Method for selecting an option.
         */
        scope.selectOption = function($event, currentItem) {
          $event.preventDefault();

          /*
           * Sets the currently displayed option to the selected option
           */
          scope.currentOption = currentItem;

          /*
           * If a custom click method is defined fire the method.
           * Passes in angular.element($event.target) (the clicked item)
           * as an argument
           */
          if(scope.customClick !== undefined) {
            scope.customClick(angular.element($event.target));
          }
        };
      }
    };
  });
