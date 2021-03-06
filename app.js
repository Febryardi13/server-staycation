var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const cors = require("cors")

//Import connect mongoose
// mongodb://127.0.0.1:27017/staycation_db
// mongodb+srv://admstaycation:060612Fm@cluster0-t77dc.mongodb.net/db_staycation?retryWrites=true&w=majority
const mongoose = require("mongoose");
mongoose.connect('mongodb://adm-staycation:rahasia@cluster0-shard-00-00.t77dc.mongodb.net:27017,cluster0-shard-00-01.t77dc.mongodb.net:27017,cluster0-shard-00-02.t77dc.mongodb.net:27017/db_staycation?ssl=true&replicaSet=atlas-10sdlf-shard-0&authSource=admin&retryWrites=true&w=majority', {
// mongoose.connect('mongodb://127.0.0.1:27017/db_staycation', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

var indexRouter = require('./router/index');
var usersRouter = require('./router/users');

// router admin
const adminRouter = require('./router/admin');
const apiRouter = require('./router/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000 }
}));
app.use(cors())
app.use(flash());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/sb-admin-2', express.static(path.join(__dirname, 'node_modules/startbootstrap-sb-admin-2')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//admin
app.use('/admin', cors(), adminRouter);
app.use('/api/v1/member', apiRouter);

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
