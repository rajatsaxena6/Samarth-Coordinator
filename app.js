var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// var authRoutes = require('./webserver/auth/authrouter');
// var authByToken = require('./webserver/auth/authbytoken');

//Express App created
var app = express();

app.onAppStart = function(addr) {
	console.log("Samarth-Coordinator web app is now Running on port:", addr.port);
}

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
// app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'webapp')));


app.use(function(req, res, next) {
	var err = new Error('Resource not found');
	err.status = 404;
	return res.status(err.status).json({
		"error": err.message
	});
});

if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		logger.error("Internal error in watch processor: ", err);
		return res.status(err.status || 500).json({
			"error": err.message
		});
	});
}

app.use(function(err, req, res, next) {
	logger.error("Internal error in watch processor: ", err);
	return res.status(err.status || 500).json({
		"error": err.message
	});
});

module.exports = app;
