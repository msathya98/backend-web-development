
const express = require("express");

const app = express();

app.get("/", function(req, res){
	res.send("<h1>Hello Guys </h1> <p>I'm Sathya M and I'm a Web-developer @ZeroSwap Labs</p>");
	
});

app.get("/about", function(req, res){
	res.send("<h2>I'm Sathya M and I'm a Web-developer @ZeroSwap Labs </h2>");
	
});

app.get("/about/contact", function(req, res){
	res.send("<p>If u want,contact Me: <em>sathyaachar565@gmail.com</em></p>");
	
});

app.get("/about/contact/number", function(req, res){
	res.send("<p>number 3526457362</em></p>");
	
});


app.listen(3000, function(){
	console.log("server has started on port 3000");
});