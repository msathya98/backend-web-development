const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
 const app = express();

app.use(express.static("public"));

 app.use(bodyParser.urlencoded({extended: true}));

 app.get("/", function(req, res){
 	res.sendFile(__dirname + "/signup.html");
 
 app.post("/", function(req, res){
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;

const data = {
	members: [
	{
		email_address: email,
		status: "subscribed",
        merge_fields: {
        	FNAME: firstName,
        	LNAME: lastName
        }
	}
	]
};

const jsonData = JSON.stringify(data);

const url = "https://us7.api.mailchimp.com/3.0/lists/fb5147ed2e" 

const options = {
	method: "post",
	auth: "sathya:894939ccc7f780c48e07a7984e666ca7a-us7"
}

const request = https.request( url, options, function(response){

	if(response.statusCode === 200){
		res.sendFile(__dirname + "/sucess.html");
 } else {
		res.sendFile(__dirname + "/failure.html");
 }
	
response.on("data", function(data){
	console.log(JSON.parse(data));
})
})
 	request.write(jsonData);
 	request.end();
 	//console.log(firstName, lastName, email);
 })	
 });
app.post("/failure", function(req, res){
	res.redirect("/");
})
 app.listen(3000, function(){
 	console.log("server has started");
 })



 //94939ccc7f780c48e07a7984e666ca7a-us7

 //list id
 //fb5147ed2e
