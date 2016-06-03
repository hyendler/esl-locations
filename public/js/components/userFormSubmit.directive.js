'use strict';

angular.module('eslLocations')
	.directive('userFormSubmit', function(){
		return {
			replace: true,
			template: '<div>Welcome {{main.regUser}}!</div>'
		}
	})