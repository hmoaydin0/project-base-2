const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Router dosyalarını require ile alıyoruz
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const auditlogsRouter = require('./routes/auditlogs');

const app = express();

// __dirname CommonJS'de otomatik vardır, ekstra tanımlamaya gerek yok

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  console.log("ben app.js te tanimlanan bir middleware'im.");
  next();
});

// Router'ları kullanıyoruz
app.use('/api', indexRouter);

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

// CommonJS'de module.exports ile export ediyoruz
module.exports = app;
