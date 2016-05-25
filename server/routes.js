'use strict';

module.exports = function(app) {
	var User = require('./controllers/users.controller.js');
	
	app.route('/users')
		.post(User.create)

	app.route('/users/:id/challenges/:id')
		.put(User.update);

}