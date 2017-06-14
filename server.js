// requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./modules/index');
var songs = require('./modules/songs');


// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', index);
app.use('/songs', songs);


//globals
var port = process.env.PORT || 8000;


//spin up server
app.listen(port, function(){
  console.log('Server is up on port: ', port);
}); // end spin up server
