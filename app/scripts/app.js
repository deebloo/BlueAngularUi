'use strict';

angular
  .module('blueUiApp', [])
  .config(function($locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');
  });
