var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("Server Listening on https://localhost:" + PORT);
});