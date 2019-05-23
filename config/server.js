var express = require('express');
var consign = require('consign');
//var bodyParser = require('body-parser');

var engine = require('consolidate');

/* app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html'); */




var app = express();
app.engine('html', require('ejs').renderFile);
app.set('views', './app/views');
///Ainda não sei qual view engine irei usar, por isso deixei html
app.set('view engine', 'html');


app.use(express.static('./app/assets'));

consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;