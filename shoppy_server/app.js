var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// dotenv.config();
var app = express();
//add mongoose
var mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://sparkyruth:yaleun93@sparkydb.pyovmdq.mongodb.net/?retryWrites=true&w=majority')
// mongoose.connect('mongodb://localhost:27017/sparkydb')
// mongoose.connect(process.env.DB_URL)

// mongoose.connect('mongodb://sparkyruth:yaleun93@ElasticIP:27017/sparkydb?authSource=admin')


const url = process.env.DB_URL


// app.set('port', 3000);
app.set('port', `http://localhost:${process.env.PORT}`);

mongoose.connect(url, {useNewUrlParser: true});
    mongoose.connection.once('open', function(){
      console.log('MongoDB Connected!');
    }).on('error', function(error){
        console.log('Error is: ', error);
    });



// add cors
var cors = require('cors');
app.use(cors({
  origin: 'http://localhost:4200'
}))

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

// catch 404 and forward to error handler
app.use(function(req, res, next){
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
