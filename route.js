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

//return the router object
module.exports = router; 