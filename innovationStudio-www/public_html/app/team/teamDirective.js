
(function () {
    'use strict';

    angular.module('innovationstudio.team')
    
    
        /**********************************************************************
        * Template for the team member avatar where the text is on the top
        ***********************************************************************/
    
        .directive("topblock", function () {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    fname: '@',
                    skill1: '@',
                    skill2: '@',
                    skill3: '@',
                    skill4: '@'
                },
                templateUrl: 'app/team/blockTemplates/teamblockTop.html'
            }
        })
    
    
        /**********************************************************************
        * Template for the team memeber avatar where the text is on the bottom
        ***********************************************************************/
        .directive("bottomblock", function () {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    fname: '@',
                    skill1: '@',
                    skill2: '@',
                    skill3: '@',
                    skill4: '@'
                },
                templateUrl: 'app/team/blockTemplates/teamblockBottom.html'
            }
        })
    
        /**********************************************************************
        * Template for the team memeber profile modal
        ***********************************************************************/
        .directive("profilemodal", function () {
            return {
                restrict: 'E',
                scope: {
                    profile: '=data'
                },
                templateUrl: 'app/team/profileTemplate/profileModal.html'
            }
        })
    
        /***************************************************************************************
        * Open the proflie modal for the team member clicked on
        ****************************************************************************************/ 
        .directive("openProfile", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){

                    $('#'+attrs.fname).show();
                    $('#overlay').show();
                    
                });
            };
        }])
        /***************************************************************************************
        * Close profile modal
        ****************************************************************************************/ 
        .directive("closeProfile", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){

                    $('.profile-modal').hide();
                    $('#overlay').hide();
                    
                    
                });
            };
        }])
    
    
    
    
      
    
        ;
}());


