'use strict';

var User = require('../models/user.model.js');
var ObjectId = require('mongodb').ObjectId; 

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

	var newUser = new User({
		name: req.body.name,
		challengesCompleted: []
	})

	newUser.save(function(err) {
		if (err)
			console.log(err);
		console.log("New user created");
		res.send(newUser)
	})


}

exports.update = function(req, res) {
	//need to add challenge number validation
	var query = {"_id": ObjectId(req.body._id)}
	var update = {$push: {"challengesCompleted": {"challenge" : req.body.challengeNumber}}}
	console.log(update)
	var options = {safe: true, upsert: true}

	User.findByIdAndUpdate(query, update, options, function(err, user){
		if (err) {
			console.log(err);
		} else {
			console.log("User updated")
			console.log(user)
		}
	})

}