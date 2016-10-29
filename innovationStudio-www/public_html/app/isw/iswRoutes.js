
(function() {
  
  'use strict';

  angular.module('innovationstudio.isw')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/innovationstudioway', {
        controller: 'ISWController',
        templateUrl: 'app/isw/isw.html'
      });
  }

}());
