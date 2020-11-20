const express = require("express");

const https = require("https");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");


 app.post("/", function(req, res){  

// console.log(req.body.cityName); 
 	
	 const query = req.body.cityName
    const apikey = "602ff95b5cfac64dd879132dfe2c8ff1";
    const units = "metric";
	const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid= "+ apikey +"&units="+ units;
	
	https.get(url, function(response){

		console.log(response.statusCode);
		
		response.on("data", function(data){
			
			const weatherData = JSON.parse(data);
			const temp = weatherData.main.temp;
			const weather = weatherData.weather[0].description;
			const icon = weatherData.weather[0].icon;
			
			const imageURL = "https://openweathermap.org/img/wn/10d@2x.png";
			
      

            res.write("the weather is " + weather);
			res.write("<h1>the weather tempreture for you" + query + " is " + temp + "degree celcius.</h1>");
			res.write("<img src=" + imageURL + ">");
			res.send();  

			})

	   })

	  })


			}) ;  


	



app.listen(3000, function(){
	console.log("server started");
});
