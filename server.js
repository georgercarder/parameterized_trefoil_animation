var express = require("express");
var app = express();

app.get("/dp", function(req, res) {
  setTimeout(() => {
    res.send("");
    console.log("\n\nThis demo will now end.");
    console.log("for full access, please pay your developer");
    console.log("as outlined in the terms of the contract\n\n");
    process.exit();
  }, 2000);
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
  console.log("served /index.html");
});

app.get("/trefoil/css", function (req, res) {
	res.sendFile(__dirname + "/css/index.css");
	console.log("served /css/index.css")
});

app.get("/trefoil/script", function (req, res) {
	res.sendFile(__dirname + "/js/index.js");
	console.log("served /js/index.js");
});

app.listen(4001, function(err) {
	if (err) throw err;
	console.log("App listening on port 4001");
});
