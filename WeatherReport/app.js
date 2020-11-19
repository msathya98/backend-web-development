const express = require("express");

const https = require("https");

const app = express();



app.get("/", function(req, res){

	const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=602ff95b5cfac64dd879132dfe2c8ff1&units=metric";
	https.get(url, function(response){

		console.log(response.statusCode);
		response.on("data", function(data){
			const weatherData = JSON.parse(data)
			 const temp = weatherData.main.temp;
			const weather = weatherData.weather[0].description;
			const icon = weatherData.weather[0].icon;
             res.write("the weather is " + weather);
			res.write("<h1>the weather tempreture for you is " + icon + temp + "degree celcius</h1>");
			res.send();      
		})

	})

	
});


app.listen(3000, function(){
	console.log("server started");
});
