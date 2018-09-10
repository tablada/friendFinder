var bodyParser = require("body-parser");
var express = require("express");

var app  = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var PORT = 3306;

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("Friend Finder on http://localhost:" + PORT);
});