var express = require("express");
var path = require("path");

var routes = require("./route");

var app = express();

app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
//set view engine
app.set("view engine", "ejs");


app.listen(app.get("port"), function(){
   console.log("Server started on port " + app.get("port")); 
});
app.use(routes);





