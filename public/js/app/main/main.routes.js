'use strict';

angular.module('eslLocations')
    .config(['$routeProvider', function ($routeProvider) {
    	console.log("Im in the angular routes!")
        $routeProvider
        
            .when('/', {
                templateUrl: '/js/app/main/main.html',
                controller: 'mainController as main',
                resolve: {

                    
                
                }
            })
    }]);