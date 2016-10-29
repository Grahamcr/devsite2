
(function() {
  
  'use strict';

  angular.module('innovationstudio.approach')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/approach', {
        controller: 'ApproachController',
        templateUrl: 'app/approach/approach.html'
      });
  }

}());
