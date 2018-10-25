var express = require('express');
var app = express();
var server = app.listen(3000);

// allow access to public folder
app.use(express.static('public'));

console.log("My socket server is running");