'use strict';

var User = require('..models/user.model.js');

exports.list = function(req, res) {
	User.find(function(err, user) {
		if (err) {
			res.send(err);
		} else {
			res.json(user)
		}
	})
}

exports.create = function(req, res) {

	console.log("Controller Create function")
	console.log(req)

	var user = new User({
		name: req.body.name,
		challengesCompleted: []
	})

	user.save(function(err) {
		if (err)
			console.log(err);
		console.log("New user created");
	})

	return "User created"
}

exports.update = function(req, res) {
	//figure out req params?
	console.log("Controller update function")
	console.log(req)

	User.findByIdAndUpdate(function(err, user) {
		user._id,
		{$push: {"challenges": {"challenge" : challengeNumber}}},
		{safe: true, upsert: true},
    function(err, model) { //model??
        console.log(err);
    }
	}

)}