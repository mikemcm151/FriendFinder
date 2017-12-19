var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 5000;
var app = express();

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "home.html"))
});

app.listen(PORT)