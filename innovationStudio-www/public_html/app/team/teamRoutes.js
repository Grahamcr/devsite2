
(function() {
  
  'use strict';

  angular.module('innovationstudio.team')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/team', {
        controller: 'TeamController',
        templateUrl: 'app/team/team.html'
      });
  }

}());
