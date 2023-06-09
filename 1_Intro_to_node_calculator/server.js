
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/" ,function(req,res){
    res.sendFile(__dirname + "/calculator.html");
});


app.post("/", function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var sum = num1+num2;

    res.send("The sum of two number is " + sum);
});

app.listen(3000, function(){
    console.log("server started at port 3000");

});