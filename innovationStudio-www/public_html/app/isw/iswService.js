
'use strict';

angular.module('innovationstudio.isw')



/*****************************************************************************************
* Used locally for front-end development by Craig to mock JSON for posts
*****************************************************************************************/
.factory('ExampleService', function ($resource, $http) {
    return {
        getTeamInfo: function () {
            return $http.get('app/isw/exampleInfo/exampleinfo.json');
        }
    };
})


;
