var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res){
  console.log('base url was hit.');
  res.sendFile(path.resolve('views/index.html'));
});

module.exports = router;
