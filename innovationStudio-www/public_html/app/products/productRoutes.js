
(function() {
  
  'use strict';

  angular.module('innovationstudio.product')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/products', {
        controller: 'ProductController',
        templateUrl: 'app/products/product.html'
      });
  }

}());
