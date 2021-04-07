// Requiring necessary npm middleware packages 
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// Setting up port
var PORT = process.env.PORT || 3000;
// Creating express app and configuring middleware 
//needed to read through our public folder
var app = express();
app.use(bodyParser.urlencoded({ extended: false })); //For body parser
app.use(bodyParser.json());
app.use(express.static("views"));
app.use(express.static("views/resources"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
 
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/deviceNames.js")(app);
require("./routes/gpio.js")(app);

app.listen(PORT, function () {
       console.log("==> Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});