// load the packages we are going to use
var express         		= require('express');        // call express
var app             		= express();                 // define our app using express
var bodyParser      		= require('body-parser');
var mongoose        		= require('mongoose');
var methodOverride 			= require('method-override');
var path 								= require('path');

// temporary database in json
var LOCATIONS_FILE = path.join(__dirname, 'locations.json');

// mongo shell connection: $ mongo ds061365.mlab.com:61365/dbc_node_api -u dbc_student -p dbcmean
// conecting to MongoLab via mongo url
// mongoose.connect('mongodb://localhost/test');

var port = process.env.PORT || 3000;        // set our port


// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users



app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});


// routes ==================================================
// require('./server/routes')(app); // pass our application into our routes



app.get('/', function(req, res, next) {
	console.log("I'm in the home page!")
  // response.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/api/locations/:location_id', function(req, res) {
  fs.readFile(LOCATIONS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    parsed_data = JSON.parse(data)

    for (var i = 0; i < parsed_data.length; i++) {
    	if (parsed_data[i].id == req.params.location_id) {
    		res.json(parsed_data[i])
    	}
    }

  });
});






// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server running on port: ' + port);
exports = module.exports = app; 						// expose server