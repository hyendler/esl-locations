'use strict';

module.exports = function(app) {
	var User = require('./models/user.model.js');
	
	app.route('/users')
		.post(User.create)

	app.route('/users/:id/challenges/:id')
		.put(User.update);

}