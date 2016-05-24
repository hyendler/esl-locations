var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	challengesCompleted: [{challenge: Number}], 
	updated: { type: Date, default: Date.now },
})

module.exports = mongoose.model('user', userSchema)