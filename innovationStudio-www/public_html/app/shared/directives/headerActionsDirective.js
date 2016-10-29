
(function () {
    'use strict';

    angular.module('innovationstudio')
    
    
    
    
       /***************************************************************************************
        * Use Greensock to hide/show the global navigation menu
        ****************************************************************************************/ 
        .directive("toggleGlobalMenu", function(){
            return function(scope, element, attrs){
                element.bind("click", function(){

                    //create a TimelineLite instance
                    var tl = new TimelineLite();

                    //Check Visibility and toggle
                    if($('#header-menu').is(":visible")){
                        
                        tl.to("#header-menu", 1, {ease:Power3.easeOut, right:"-400px"});
                        tl.to("#header-menu", .1, {ease:Power3.easeOut, display:"none"}, "-=.8");

                    }else {
                        tl.to("#header-menu", .5, {ease:Power3.easeIn, display:"inherit"});
                        tl.to("#header-menu", .5, {ease:Power3.easeIn, right:"0px"}, "-=.4");
                    }
                    tl.play();

                });
            };
        })
    
        /**********************************************************************
        * Hide the header on scroll
        ***********************************************************************/
        .directive("hideOnScroll", function ($window) {
            return function(scope, element, attrs) {
                angular.element($window).bind("scroll", function() {
                    
                    var tl = new TimelineLite();
                    
                     if($('#header-menu').is(":visible") && this.pageYOffset > 60){
                        
                        tl.to("#header-menu", 1, {ease:Power3.easeOut, right:"-400px"});
                        tl.to("#header-menu", .1, {ease:Power3.easeOut, display:"none"}, "-=.8");

                    }
                    
                    tl.play();
                    
                    scope.$apply();
                });
            };
        })
    
        /***************************************************************************************
        * Redirect the user to the homepage
        ****************************************************************************************/ 
        .directive("redirectHome", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){
                    
                    window.open("#/","_self");

                    
                });
            };
        }])
    
    
        /***************************************************************************************
        * Redirect the user to the homepage
        ****************************************************************************************/ 
        .directive("redirectTeam", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){
                    
                    window.open("#/team","_self");

                    
                });
            };
        }])
    
    
        /***************************************************************************************
        * Redirect the user to the products page
        ****************************************************************************************/ 
        .directive("redirectProducts", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){
                    
                    window.open("#/products","_self");

                    
                });
            };
        }])
    
   
    /***************************************************************************************
        * Redirect the user to the approach page
        ****************************************************************************************/ 
        .directive("redirectApproach", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){
                    
                    window.open("#/approach","_self");

                    
                });
            };
        }])
    
    /***************************************************************************************
        * Redirect the user to the contact page
        ****************************************************************************************/ 
        .directive("redirectContact", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){
                    
                    window.open("#/contact","_self");

                    
                });
            };
        }])
    
        /***************************************************************************************
        * Scroll down when the user clicks the learn more link or down cheveron
        ****************************************************************************************/ 
        .directive("learnMoreScroll", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){

                          var target = $("#learn-more-target");
                          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                          if (target.length) {
                            $('html, body').animate({
                              scrollTop: target.offset().top
                            }, 1000);
                            return false;
                          }
                    
                });
            };
        }])
       
    
    
        ;
}());


