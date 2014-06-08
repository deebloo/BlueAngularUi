'use strict';

angular.module('blueUiApp')
  .directive('navbar', function ($location) {
    return {
      templateUrl: 'views/navbar.html',
      restrict: 'E',
      scope: {
        data: '='
      },
      link: function postLink(scope) {
        console.log($location.path());

        // TODO work out hashbanging madness!
        scope.activeNav = function(link) {
          return '#!' + $location.path() === link;
        }
      }
    };
  });
