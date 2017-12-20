var express = require("express");
var bodyParser = require('body-parser');
var path = require("path");
var PORT = process.env.PORT || 5000;
var app = express();

app.get("/", function(req, res){
	app.use(express.static(__dirname + '/survey'));
	app.listen(5000)
	res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

//ROUTER
// require('./app/routing/apiRoutes.js')(app); 
// require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT)

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);

//Dependencies:
// var express = require('express');
// var bodyParser = require('body-parser');
// var path = require('path');

// var app = express();
// var PORT = process.env.PORT || 5000;

// // Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// //ROUTER
// require('./app/routing/apiRoutes.js')(app); 
// require('./app/routing/htmlRoutes.js')(app);

// // Starts the server to begin listening
// app.listen(PORT, function () {
//   console.log('App listening on PORT: ' + PORT);
// });