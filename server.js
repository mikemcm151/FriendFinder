var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 5000;
var app = express();

app.get("/", function(req, res){
	app.use(express.static(__dirname + '/styles'));
	app.listen(5000)
	// res.sendFile(path.join(__dirname, "home.html"))
});

app.listen(PORT)

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);