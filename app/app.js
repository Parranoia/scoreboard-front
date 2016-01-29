(function() {
    'use strict';
    
    var app = angular.module('sb-app', []);
    
    app.controller('SBController', function($scope, $http) {
        $http({
            method: 'GET',
            url: 'http://api.sb.local/gameResults'
        }).then(function successCallback(response) {
                console.log(response.data.sort(function(a, b) {
                    return new Date(b.submitted_dt) - new Date(a.submitted_dt);
                }));
                $scope.games = response.data;
            },
            function errorCallback(response) {
                console.log("Error Response: " + response);
            }
        );
    });
})();