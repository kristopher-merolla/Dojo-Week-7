// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app (does not need 'require()'!)
var app = express();
// require body-parser
var bodyParser = require('body-parser');

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
// static content (this tells server where to get static files)
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// APPLICATION ROUTES //
////////////////////////
// ROOT ROUTE to render the index.ejs view
app.get('/', function(req, res) {
	res.render("index");
})
// POST ROUTE for adding a user
app.post('/result', function(req, res) {
	console.log("POST DATA", req.body);
	// This is where we would add the user to the database
	// Then redirect to the root route
	res.render("result", req.body);
})
// END APPLICATION ROUTES //
////////////////////////////

// tell the express app to listen on port 8000
app.listen(8000, function() {
	console.log("listening on port 8000");
});