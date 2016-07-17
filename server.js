//normal setup of mongoose server.js
var express = require('express');
app = express();
path = require('path');
var bodyParser = require('body-parser');

//app use
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//mongoose database in config
require('./server/config/mongoose_setup.js');
//get routes in config
require('./server/config/routes.js')(app);
//basic controllers

//**************************
// Integrate body-parser with our App
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './client/static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
//******** end ************

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
