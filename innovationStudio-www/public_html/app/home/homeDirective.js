
(function () {
    'use strict';

    angular.module('innovationstudio.home')
    
    
    
       /***************************************************************************************
        * Use Greensock to annimation the creation of the above the fold homepage elements
        ****************************************************************************************/ 
        .directive("createPage", function(){
            return function(scope, element, attrs){
                 
                var tl = new TimelineLite();
                
                var successColor = "lime";
                var successWeight = "500";
                
                
                if(scope.playIntro == "true") {
                    
                    tl.to("#skip-intro-area", 1, {ease:Power3.easeIn, display:"inherit"});
                    tl.to(".blinking-cursor", 1, {ease:Power3.easeIn, display:"none"}, "+=2");

                    //Type the start tag
                    tl.to("#start-command-typing", 1, {ease:Power3.easeIn, display:"inherit"});

                    //Make the start command flash and bold
                    tl.to("#start-command-typing", .5, {ease:Power3.easeIn, color:successColor, fontWeight:successWeight}, "+=2.0");

                    //Hide the start command tag
                    tl.to("#typing-start", .2, {ease:Power3.easeOut, display:"none"}, "+=.5");

                    //Show the loading bar
                    tl.to("#loading-bar", 1, {ease:Power3.easeIn, display:"inherit"}, "-=.4");

                    //Type the header background tag
                    tl.to("#header-bkg-typing", 1, {ease:Power3.easeIn, display:"inherit"}, "-=.5");

                    //Make the header background tag flash red and bold
                    tl.to("#header-bkg-typing", .5, {ease:Power3.easeIn, color:successColor, fontWeight:successWeight}, "+=1.5");

                    //Hide the header background tag
                    tl.to("#typing-header", .2, {ease:Power3.easeOut, display:"none"}, "+=.5");

                    //Show the actual header background
                    tl.to(".header", .1, {ease:Power3.easeIn, display:"inherit"}, "-=1.0");

                    //Make the actual header background "grow" into view
                    tl.from(".header", 1, {ease:Power3.easeIn, width:"0%", height:"0px"}, "-=.1");

                    //Start typing the tags for the logo area
                    tl.staggerTo(".header-left-typing", 1, {ease:Power3.easeIn, display:"inherit"}, 1, "+=.50");

                    //Make the logo area tags flash 
                    tl.to(".header-left-typing", .5, {ease:Power3.easeIn, color:successColor, fontWeight:successWeight}, "+=1.2");

                    //Hide the logo area tags
                    tl.to("#typing-header-left", 1, {ease:Power3.easeIn, display:"none"}, "-=.1");

                     //Show the actual logo area
                    tl.from($("#header-left img"), 2, {ease: Elastic.easeOut.config(1, 0.3), display:"none", height:"0px"}, "+=.25");
                    tl.from($("#header-left p"), 2, { ease: Elastic.easeOut.config(1, 0.3), opacity:"0"}, "-=2.0");


                    //Start typing the tags for the menu area
                    tl.staggerTo(".menu-typing", 1, {ease:Power3.easeIn, display:"inherit"}, 1, "-=1.0");

                    //Make the menu buton tags flash 
                    tl.to(".menu-typing", .5, {ease:Power3.easeIn, color:successColor, fontWeight:successWeight}, "+=.1");

                    //Hide the menu area tags
                    tl.to("#typing-menu-btn", 1, {ease:Power3.easeIn, display:"none"}, "+=.1");

                    //Show the actual menu area
                    tl.from($("#header-menu-btn p"), 2, {ease: Elastic.easeOut.config(1, 0.3), opacity:"0"}, "-=.01");
                    tl.from($("#header-menu-btn span"), 2, { ease: Elastic.easeOut.config(1, 0.3), opacity:"0"}, "-=2.0");
                    tl.from($("#header-menu-btn #contact-us"), 2, { ease: Elastic.easeOut.config(1, 0.3), opacity:"0"}, "-=2.0");


                    //Start typing the tags for the video area
                    tl.staggerTo(".video-typing", 1, {ease:Power3.easeIn, display:"inherit"}, 1, "-=2.0");

                    //Make the video area tags flash 
                    tl.to(".video-typing", .5, {ease:Power3.easeIn, color:successColor, fontWeight:successWeight}, "+=1.0");

                    //Hide the video area tags
                    tl.to("#typing-video-area", 1, {ease:Power3.easeIn, display:"none"}, "+=.1");

                    //Show the actual video area
                    tl.from($(".top-video #header-video"), 1, {ease:Power3.easeIn, opacity:"0", height:"0px", width:"0px;"}, "-=1.50");



                    //Start typing the tags for the overlay area
                    tl.staggerTo(".overlay-typing", 1, {ease:Power3.easeIn, display:"inherit"}, 1, "-=.5");

                    //Make the overlay tags flash 
                    tl.to(".overlay-typing", .5, {ease:Power3.easeIn, color:successColor, fontWeight:successWeight}, "+=2.0");

                    //Hide the overlay area tags
                    tl.to("#typing-overlay-area", 1, {ease:Power3.easeIn, display:"none"}, "+=1.0");

                    //Show the actual video overlay area
                    tl.from($(".top-video #video-overlay"), 2, {ease:Power3.easeIn, opacity:"0", height:"0px", width:"0px;"}, "-=1.5");





                    //Start typing the tags for the c2a btns
                    tl.staggerTo(".c2a-typing", 1, {ease:Power3.easeIn, display:"inherit"}, 1, "-=.5");

                    //Make the c2a btns flash 
                    tl.to(".c2a-typing", .25, {ease:Power3.easeIn, color:successColor, fontWeight:successWeight}, "+=2.7");

                    //Hide the c2a btn tags
                    tl.to("#typing-c2a-area", .5, {ease:Power3.easeIn, display:"none"}, "+=1.0");

                    //Show the overlay buttons
                    tl.from($(".top-video #home-btn-1"), 2, {ease:Power3.easeIn, opacity:"0", height:"0px", width:"0px;"}, "-=1.0");
                    tl.from($(".top-video #home-btn-2"), 2, {ease:Power3.easeIn, opacity:"0", height:"0px", width:"0px;"}, "-=2.0");
                    tl.from($("#learn-more"), 2, {ease:Power3.easeIn, opacity:"0", height:"0px", width:"0px;"}, "-=2.0");
                    
                    tl.from($("#below-fold-content"), .02, {ease:Power3.easeIn, opacity:"0", height:"0px", width:"0px;"}, "-=2.0");
                    
                    tl.to("#skip-intro-area", 1, {ease:Power3.easeIn, display:"none"});
                    tl.play();
                    
                    
                }else {
                    tl.to(".top-video", .01, {ease:Power3.easeIn, bottom:"0px"});
                    tl.to("#video-overlay", .01, {ease:Power3.easeIn, bottom:"0px", height:"100%", borderBottom:"solid #FFCC33 5px"}, "-=.01");
                    
                    tl.play();
                }
            };
        })
    
        /***************************************************************************************
        * Use Greensock to annimate the loading bar
        ****************************************************************************************/ 
        .directive("load", function(){
            return function(scope, element, attrs){
                 
                if(scope.playIntro == "true") {
                    var tl = new TimelineLite();

                    setTimeout(function(){
                        tl.to("#loading-bar", 35, {ease:Power3.easeIn, width:"100%"});

                        tl.to("#loading-bar", .5, {ease:Power3.easeIn, display:"none"}, "+=1");

                        tl.to(".top-video", .5, {ease:Power3.easeIn, bottom:"0px"}, "+=.5");
                        tl.to("#video-overlay", .5, {ease:Power3.easeIn, bottom:"0px", height:"100%"}, "-=.5");

                        tl.play();
                    },2000);
                }
                
            };
        })
    
        /***************************************************************************************
        * Use Greensock to annimate the different status messages
        ****************************************************************************************/ 
        .directive("loadingMessages", function(){
            return function(scope, element, attrs){
                 
                if(scope.playIntro == "true") {
                    var tl = new TimelineLite();

                    setTimeout(function(){
                        tl.to($("#updates #update-1"), .01, {ease:Power3.easeIn, display:"inherit"});
                        tl.from($("#updates #update-1"), .5, {ease:Power3.easeIn, y:"50px"});

                        tl.to($("#updates #update-1"), .5, {ease:Power3.easeIn, y:"50px", display:"none"}, "+=5");
                        tl.to($("#updates #update-2"), .01, {ease:Power3.easeIn, display:"inherit"}, "-=.5");
                        tl.from($("#updates #update-2"), .5, {ease:Power3.easeIn, y:"50px"});

                        tl.to($("#updates #update-2"), .5, {ease:Power3.easeIn, y:"50px", display:"none"}, "+=4");
                        tl.to($("#updates #update-3"), .01, {ease:Power3.easeIn, display:"inherit"}, "-=.5");
                        tl.from($("#updates #update-3"), .5, {ease:Power3.easeIn, y:"50px"});


                        tl.to($("#updates #update-3"), .5, {ease:Power3.easeIn, y:"50px", display:"none"}, "+=2");
                        tl.to($("#updates #update-4"), .01, {ease:Power3.easeIn, display:"inherit"}, "-=.5");
                        tl.from($("#updates #update-4"), .5, {ease:Power3.easeIn, y:"50px"});

                        tl.to($("#updates #update-4"), .5, {ease:Power3.easeIn, y:"50px", display:"none"}, "+=2");
                        tl.to($("#updates #update-5"), .01, {ease:Power3.easeIn, display:"inherit"}, "-=.5");
                        tl.from($("#updates #update-5"), .5, {ease:Power3.easeIn, y:"50px"});

                        tl.to($("#updates"), .5, {ease:Power3.easeIn, marginLeft:"-250px", textAlign:"right"});

                        tl.to($("#updates p"), .5, {ease:Power3.easeIn, color:"#FFF"}, "-=.5");

                        tl.to($("#updates #update-5"), .5, {ease:Power3.easeIn, y:"50px", display:"none"}, "+=4");
                        tl.to($("#updates #update-6"), .01, {ease:Power3.easeIn, display:"inherit"}, "-=.5");
                        tl.from($("#updates #update-6"), .5, {ease:Power3.easeIn, y:"50px"});

                        tl.to($("#updates #update-6"), .5, {ease:Power3.easeIn, y:"50px", display:"none"}, "+=2");
                        tl.to($("#updates #update-7"), .01, {ease:Power3.easeIn, display:"inherit"}, "-=.5");
                        tl.from($("#updates #update-7"), .5, {ease:Power3.easeIn, y:"50px"});

                        tl.to($("#updates #update-7"), .5, {ease:Power3.easeIn, y:"50px", display:"none"}, "+=2");
                        tl.to($("#updates #update-8"), .01, {ease:Power3.easeIn, display:"inherit"}, "-=.5");
                        tl.from($("#updates #update-8"), .5, {ease:Power3.easeIn, y:"50px"});

                        tl.play();
                    },7000);
                }
                
            };
        })
    
        /***************************************************************************************
        * Reload the homepage to play the introduction
        ****************************************************************************************/ 
        .directive("playCoolIntro", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){

                     window.open("#/?playIntro=true","_self");
                    
                    
                });
            };
        }])
    
        /***************************************************************************************
        * Reload the homepage to skip the intro
        ****************************************************************************************/ 
        .directive("skipCoolIntro", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){

                     window.open("#/","_self");
                    
                    
                });
            };
        }])
    
    
        ;
}());


