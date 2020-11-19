const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));



app.get("/bmi", function(req, res){
	res.sendFile(__dirname + "/bmi.html");
});

 app.post("/bmi", function(req, res){

    var height = parseInt(req.body.height);
	var weight = parseInt(req.body.weight);

	var result = weight / (height * height);

	res.send("the result of calculation is " + result);
});

app.listen(3000, function(){
	console.log("server started");
});
