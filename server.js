var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var exphbs = require('express-handlebars');
var app= express();
var main = require('./router/main');


app.set('views',path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout : null }));
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, ('public'))));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',main);

app.listen(process.env.PORT || 3000, function() {

	console.log('server is listening');
});