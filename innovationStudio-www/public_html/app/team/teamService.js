
'use strict';

angular.module('innovationstudio.team')



/*****************************************************************************************
* Used locally for front-end development by Craig to mock JSON for posts
*****************************************************************************************/
.factory('InfoService', function ($resource, $http) {
    return {
        getTeamInfo: function () {
            return $http.get('app/team/teamInfo/teamInfo.json');
        }
    };
})


;
