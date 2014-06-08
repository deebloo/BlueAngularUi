'use strict';

angular.module('blueUiApp')
  /*
   * REQUIRES $locationProvider TO BE SET UP IN APP CONFIG
   */
  .directive('navbar', function ($location) {
    return {
      templateUrl: 'views/navbar.html',
      restrict: 'E',
      scope: {
        data: '='
      },
      link: function postLink(scope) {
        scope.activeNav = function(link) {
          /*
           * If the route contains '#!', remove it for comparison
           * (HTML5 mode === false || HTML5 mode === true && older browser)
           * if not leave it alone
           * (HTML5 mode === true && in modern browser)
           */
          var route = function() {
            if( link.indexOf('#!') > -1 ) {
              return link.replace('#!', '');
            } else {
              return link;
            }
          }();

          return $location.path() === route;
        }
      }
    };
  });
