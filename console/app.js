'use strict';

const express = require( 'express'),
      expressLayouts = require('express-ejs-layouts'),
      path           = require('path'),
      morgan         = require('morgan'),
      bodyParser     = require('body-parser'), 
      mongoose       = require('mongoose'),
      cookieParser   = require('cookie-parser'),
      config         = require('config'),
      session        = require('express-session'),
      flash          = require('connect-flash'),
      expressValidator = require('express-validator'),
      TechstarBot      = require('intelligo'),
      passport       = require("passport");

const app = express();

const DB_URI = (process.env.DB_URI) ?
  (process.env.DB_URI) :
  config.get('DB_URI');
  
const SECRET = (process.env.SECRET) ?
  (process.env.SECRET) :
  config.get('SECRET');
  
const bot = new TechstarBot({
  accessToken: config.get('PAGE_ACCESS_TOKEN'),
  verifyToken: config.get('VALIDATION_TOKEN'),
  appSecret: config.get('APP_SECRET'),
  app: app
});
bot.initWebhook();
bot.setGreeting("Hi I am CryptoBot")

app.set('port', process.env.PORT || 5000);
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
  secret: SECRET, 
  cookie: { maxAge: 604800000 },
  resave: false,   
  saveUninitialized: false 
}));
app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));     
app.use(express.static(path.join(__dirname, "public")));
app.use(require('express-status-monitor')({
    title: 'Techstar Cloud Status',  
    path: '/status',
    spans: [{
      interval: 1,      
      retention: 60  
    }, {
      interval: 5,          
      retention: 60
    }, {
      interval: 15,          
      retention: 60
    }, {
      interval: 60,          
      retention: 60
    }, {
      interval: 1440,          
      retention: 60
    }],
    chartVisibility: {
      cpu: true,
      mem: true,
      load: true,
      responseTime: true,
      rps: true,
      statusCodes: true
    }
  }
));

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(expressLayouts);
    
mongoose.connect(DB_URI, { useMongoClient: true });

app.use(expressValidator());

require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());
require('./routes/routes.js')(app, passport);

module.exports = app;