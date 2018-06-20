var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// EACN start
//var bootstrap = require('bootstrap');
var jquery = require('jquery');
var mysql = require('mysql');
var mensajes = require('./routes/mensajes');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'usbw',
	database: 'dbecan',
	port: 3307
 });
// EACN end
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// EACN start
app.get('/enviar_mensaje', mensajes.get_enviar_mensaje);
app.post('/enviar_mensaje', mensajes.post_enviar_mensaje);
app.get('/mensaje/:indice', mensajes.get_mensaje);
connection.connect(function(error){
	if(error){
	   throw error;
	}else{
	   console.log('Conexion correcta.');
	}
 });
 connection.end();
// EACN end

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
