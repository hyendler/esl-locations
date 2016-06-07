'use strict';

angular.module('eslLocations', ['ngRoute', 'ngResource', 'ngAudio'])
    
    .config(['$routeProvider', function ($routeProvider) {
        console.log("I'm in app.js!")
        
        $routeProvider
        
            .otherwise({
                redirectTo: '/'
            })
    }])