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
  //appInitUtils.CONNECT_MONGO
];

//initApp() will not callback an error.
//If something fails, it will just exit the process.
appInitUtils.initApp( 'realkick', initActions, conf, function() {

  var app = module.exports = express();

  var options = {};
  app.configure('local', function(){
    options = {
      key: fs.readFileSync( './keys/local.key' )
      , cert: fs.readFileSync( './keys/local.crt' )
    };
  });

  app.configure('production', function(){
    options = {
    };
  });


  var app = module.exports = express();
  app.use(express.static(__dirname + '/public'));

  app.get ('/', function (req, res) {
    winston.doInfo('slash request', {res: res});
    res.sendfile('public/index.html');
  });

  app.listen(conf.listenPort);
});