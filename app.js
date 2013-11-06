console.log('running...');

var express = require('express'),
    appInitUtils = require('./lib/appInitUtils'),
    conf = require ('./conf'),
    expressValidator = require('express-validator'),
    routes = require ('./routes/routes'),
    https = require ('https'),
    http = require ('http'),
    fs = require ('fs'),
    winston = require ('./lib/winstonWrapper').winston;

var initActions = [
  appInitUtils.CONNECT_MONGO
];

//initApp() will not callback an error.
//If something fails, it will just exit the process.
appInitUtils.initApp( 'app', initActions, conf, function() {

  var app = module.exports = express();

  var options = {};
  app.configure('local', function(){
    options = {
    };
  });

  app.configure('production', function(){
    options = {
    };
  });

  app.configure(function() {
    app.engine('html', require('ejs').__express)
    app.use(express.logger({ format:'\x1b[1m:method\x1b[0m \x1b[33m:url\x1b[0m :date \x1b[0m :response-time ms' }));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    app.use(express.bodyParser())
    app.use(express.cookieParser())
    app.use(express.methodOverride())
    app.use(express.static(__dirname + '/public'))
    app.use(express.compress())
    app.use(expressValidator)
    app.use(express.cookieSession({
      secret : conf.express.secret
    }))
  });

  app.get ('/', function (req, res) {
    res.sendFile ('index.html');
  });

  //app.get ('/application', routes.getApplications);

  https.createServer(options, app).listen(8080, function() {
    winston.doInfo('app running', {listenPort: 8080}, true);
  });
});