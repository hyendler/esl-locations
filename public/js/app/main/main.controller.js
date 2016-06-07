angular.module('eslLocations')
	.controller('mainController', ['$scope', 'UserFactory', '$http', 'ngAudio', function($scope, UserFactory, $http, ngAudio) {
		console.log("I'm in the Angular mainController!");

		var ctrl = this;

		// UserFactory.get()


		this.newUser = {name: "Your name here!"} //why do I have two of these, one outside and one inside?

		ctrl.createUser = function(){
			console.log("I'm creating a user!")
			UserFactory.create(ctrl.newUser)
			.then(function (res) {
				ctrl.regUser = res.data.name
				// ctrl.newUser = {name: "Your name here!"}
			}, function(err){
				console.log(err)
			})
		};

		ctrl.updateUserChallenges = function() {
			UserFactory.user.update().then(function () {
				console.log("User updated on the front end")
				//do I need to update regUser on the front end as well?
			}, function(err) {
				console.log(err)
			});
		};


	}])