var express = require("express");
var cors = require("cors");
//var bodyParser = require('body-parser')
var app = express();
var port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


var Twiter = require("./route/twitt");

app.use("/twitt", Twiter); 


app.listen(port, function() {
  console.log("Server is running on port: " + port);
});