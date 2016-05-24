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

}

exports.update = function(req, res) {

}