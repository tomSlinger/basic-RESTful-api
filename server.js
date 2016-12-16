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

var port = process.env.PORT || 8080; //SET OUR PORT

//ROUTES FOR OUR API
// ==============================================================================================================

var router = express.Router(); //GET AN INSTANCE OF THE EXPRESS ROUTER

//TEST ROUTE TO MAKE SURE EVERYTHING IS WORKING (ACCESSED AT GET HTTP://LOCALHOST:8080/API)
router.get('/', function(req, res){
    res.json({ message: 'Hello! Welcome to our API!' });
});

//MORE ROUTES FOR OUR API WILL HAPPEN HERE



//REGISTER OUR ROUTES
// ==============================================================================================================

//ALL OF OUR ROUTES WILL BE PREFIXED WITH /API
app.use('/api', router);

//START THE SERVER
// ==============================================================================================================

app.listen(port);
console.log('Magic happens on port ' + port);