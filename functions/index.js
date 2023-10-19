const functions = require("firebase-functions");
const express = require("express");
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = require('express')();
const server = require('http').createServer(app);
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({
  extended: false
})

app.use("/", express.static('./public'));


app.get("/timestamp", (req, res) =>{
    res.send(`${Date.now()}`);
});


app.get("/aboutus", function(req,res){
    res.render("aboutus");
});

app.get("/blog", function(req,res){
    res.render("blog");
});

app.get("/detail", function(req,res){
    res.render("detail");
});

app.get("/facility", function(req,res){
    res.render("facility");
});

app.get("/status", (req, res) =>{
    res.status(200).send({data:"Hello"});
}); 


app.get("/", function(req,res){
    res.redirect("/home");
});

app.get("/home", function(req,res){
    res.render("home");
});

app.get("/inblog", function(req,res){
    res.render("inblog");
});

app.get("/inwebinar", function(req,res){
    res.render("inwebinar");
});

app.get("/login", function(req,res){
    res.render("login");
});

app.get("/mycourses", function(req,res){
    res.render("mycourses");
});

app.get("/payment", function(req,res){
    res.render("payment");
});

app.get("/purchases", function(req,res){
    res.render("purchases");
});

app.get("/quiz", function(req,res){
    res.render("quiz");
});

app.get("/signup", function(req,res){
    res.render("signup");
});

app.get("/studymethod", function(req,res){
    res.render("studymethod");
});

app.get("/webinar", function(req,res){
    res.render("webinar");
});

exports.app = functions.https.onRequest(app);

// server.listen(process.env.PORT || 3000, function() {
//     console.log('app running on Port 3000');
//   });