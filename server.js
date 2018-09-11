var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
  console.log("served /index.html");
});

app.get("/css", function (req, res) {
	res.sendFile(__dirname + "/css/index.css");
	console.log("served /css/index.css")
});

app.get("/script", function (req, res) {
	res.sendFile(__dirname + "/js/index.js");
	console.log("served /js/index.js");
});

app.listen(4000, function(err) {
	if (err) throw err;
	console.log("App listening on port 4000");
});
