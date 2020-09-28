//holds all of the routes.

var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    console.log("We're at the basic view here.")
    //Render index view later
    res.render("home/index");
});

router.get("/home", function (req, res) {
    res.render("home/home");
});

router.get("/about", function (req, res) {
    res.render("home/about");
});

router.get("/self", function (req, res) {
    res.render("home/self");
});

router.get("/signup", function (req, res) {
    res.render("home/signup");
});

router.get("/login", function (req, res) {
    res.render("home/login");
});

module.exports = router;