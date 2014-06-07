'use strict';

angular.module('blueUiApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'views/navbar.html',
      restrict: 'E',
      link: function postLink(scope) {
        scope.selected = true;
      }
    };
  });
