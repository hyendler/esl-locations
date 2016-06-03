'use strict';

angular.module('eslLocations')
	.factory('UserFactory', function($http) {
		console.log("I'm in the UserFactory")
		return {
			create: function(userData) {
				return $http({
										  method: 'POST',
										  data: userData,
										  url: '/users'
										})
			},
			update: function(userData) {
				return $http.post('/users/:id/challenges/:id', userData)
			}
		}
	})