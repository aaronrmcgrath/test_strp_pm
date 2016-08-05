var express = require('express');
var path = require('path');

var env = require('../../.env');

var api = process.env.API;
var secret_key = process.env.SECRET_KEY;
var published_key = process.env.PUBLISHED_KEY;

console.log('HERE IS API: ', api);

var router = express.Router();

// call stripe api
router.get('/stripe', function(req, res){
    var authorization = api + '/' + secret_key;
    console.log('@SERVER in /stripe GET - here is authorization: ', authorization);
    authorization;
});

// General/wildcard Get
router.get('/*', function(req, res, next) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '../public', file));
});


module.exports = router;
