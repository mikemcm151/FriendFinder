var express = require("express");
var path = require("path");
var PORT = 3000;
var app = express();

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "home.html"))
});

app.listen(PORT)