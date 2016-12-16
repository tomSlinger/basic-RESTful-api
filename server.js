//BASE SETUP
// ==============================================================================================================

//CALL THE PACKAGES WE NEED
var express = require('express'); //CALL EXPRESS
var app = express(); //DEFINE OUR APP USING EXPRESS
var bodyParser = require('body-parser');

//CONFIGURE APP TO USE BODYPARSER()
//THIS WILL LET US GET THE DATA FROM A POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());