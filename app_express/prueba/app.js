var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//Modelos
require("./models/user_model.js"); //require para que se cargue mongoose porque el connection lo estoy haciendo aqui
                                    // y quiero que lo tenga la aplicación



// Rutas de web
var routes = require('./routes/index');
var users = require('./routes/users');
var admin = require('./routes/admin');


// Rutas de api V1
var apiUsers = require("./routes/api/v1/users_v1");



var app = express();

/*
app.use(function(req, res, next){
  var algo = req.query.algo || "";
  req.algo = algo;
  next(err);

});
*/
// view engine setup
app.set('views', path.join(__dirname, 'views'));  //le dices que siempre que te rendericen una vista te vayas a views
app.set('view engine', 'ejs');  //el motor para generar las vistas es js

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));//para poner favicon comentado por defecto
app.use(logger('dev')); //cada petición que llegue, express va a llamar a esto.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/admin', admin);
app.use("/api/v1/users_v1", apiUsers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
