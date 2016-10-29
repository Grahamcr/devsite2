
(function () {
    'use strict';

    angular.module('innovationstudio')
    
    
    
    
       /***************************************************************************************
        * Use Greensock to hide/show the global navigation menu
        ****************************************************************************************/ 
        .directive("typingText", function(){
            return function(scope, element, attrs){
                
                var $el = $(element[0]),
                    txt = $el.text(),
                    txtLen = txt.length,
                    timeOut,
                    char = 0,
                    delay = attrs.delay;

                $el.text('|');
                
                setTimeout(function() {
                    (function typeIt() {   
                        var humanize = Math.round(Math.random() * (100 - 15)) + 15;
                        timeOut = setTimeout(function() {
                            char++;
                            var type = txt.substring(0, char);
                            $el.text(type + '|');
                            typeIt();

                            if (char == txtLen) {
                                $el.text($el.text().slice(0, -1)); // remove the '|'
                                clearTimeout(timeOut);
                            }

                        }, humanize);
                    }());   
                }, delay);
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
    
       
    
    
        ;
}());


