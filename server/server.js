var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');

dotenv.config();
// require('dotenv').config();

var app = express();


var index = require('./routes/index');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
app.use('/', index);

//set port
app.set('port', (process.env.PORT || 2000));

// 404 errors
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));
});

module.exports = app;
