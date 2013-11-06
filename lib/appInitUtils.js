var async = require('async')
  , conf = require ('../conf')
  , winston = require ('./winstonWrapper').winston
  , mongooseConnect = require('./mongooseConnect')

var appInitUtils = this;

exports.CONNECT_MONGO = 'mongoConnect';

process.on('uncaughtException', function (err) {

  if (err.message 
    && (err.message.indexOf('ECONNRESET') > -1 || err.message.indexOf ('ENOTFOUND') > -1 || err.message.indexOf ('ETIMEDOUT') > -1)) {
    winston.doWarn('uncaughtException:', {stack : err.stack, message : err.message});
  } else {
    winston.doError('uncaughtException:', {stack : err.stack, message : err.message});
    process.exit(1);
  }

});

exports.initApp = function( appName, actions, conf, callback ) {

  winston.logBreak();
  winston.doInfo( appName + ' app starting...', {}, true);

  if ( ( ! actions ) || ( ! ( actions.length > 0 ) ) ) {
    winston.doInfo( appName + ' app init successful, no required actions.', {}, true);
    callback();

  } else {
    async.each( actions, appInitUtils.doInitAction, function( err ) {
      if ( err ) {
        winston.doError( appName + ' app init failed!', {err: err});
        process.exit(1);

      } else {
        winston.doInfo( appName + ' app init successful', {}, true);
        callback();
      }
    });
  }
}

exports.doInitAction = function( action, callback ) {

  if ( ! action ) { callback( winston.makeMissingParamError('action') ); return; }

  switch( action ) {
    
    case appInitUtils.CONNECT_MONGO:
      mongooseConnect.init( callback );
      break;
   
    default:
      callback( winston.makeError('invalid init action', {action: action} ) );
  }
}
