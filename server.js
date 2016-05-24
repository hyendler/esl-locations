// load the packages we are going to use
var express         		= require('express');        // call express
var app             		= express();                 // define our app using express
var bodyParser      		= require('body-parser');
var mongoose        		= require('mongoose');
var methodOverride 			= require('method-override');


// mongo shell connection: $ mongo ds061365.mlab.com:61365/dbc_node_api -u dbc_student -p dbcmean
// conecting to MongoLab via mongo url
mongoose.connect('mongodb://localhost/test');

var port = process.env.PORT || 3000;        // set our port


// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./server/routes')(app); // pass our application into our routes

// models



// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server running on port: ' + port);
exports = module.exports = app; 						// expose server