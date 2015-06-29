'use strict';

/**
 * @ngdoc function
 * @name angulartestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angulartestApp
 */
angular.module('angulartestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
