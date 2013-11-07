(function() {
  var Helpers, WalkScore, conf, request;

  Helpers = require('./helpers');

  request = require('request');

  conf = require('../conf');

  WalkScore = this;

  WalkScore.getWalkScore = function(address, latitude, longitude, cb) {
    var apiURL, params;
    apiURL = conf.WalkScore.WalkScoreURL;
    params = {
      wsapikey: conf.WalkScore.APIToken,
      format: 'json',
      address: address,
      lat: latitude,
      lon: longitude
    };
    console.log('walkscoreURL', WalkScore.constructURL(apiURL, params));
    return request(WalkScore.constructURL(apiURL, params), function(err, res, body) {
      var jsonData;
      if (!err && res.statusCode === 200) {
        try {
          jsonData = JSON.parse(body);
          return cb(null, jsonData);
        } catch (e) {
          return cb(e);
        }
      } else {
        console.error('invalid resposne from walkscore', {
          err: err,
          code: res != null ? res.statusCode : void 0
        });
        return cb({
          err: err,
          code: res != null ? res.statusCode : void 0
        });
      }
    });
  };

  WalkScore.getTransitScore = function(city, state, latitude, longitude, cb) {
    var apiURL, params;
    apiURL = conf.WalkScore.TransitScoreURL;
    params = {
      wsapikey: conf.WalkScore.APIToken,
      format: 'json',
      city: city,
      lat: latitude,
      lon: longitude,
      state: state
    };
    console.log('TransitScoreURL', WalkScore.constructURL(apiURL, params));
    return request(WalkScore.constructURL(apiURL, params), function(err, res, body) {
      var jsonData;
      if (!err && res.statusCode === 200) {
        try {
          jsonData = JSON.parse(body);
          return cb(null, jsonData);
        } catch (e) {
          return cb(e);
        }
      } else {
        console.error('invalid resposne from walkscore', {
          err: err,
          code: res != null ? res.statusCode : void 0
        });
        return cb({
          err: err,
          code: res != null ? res.statusCode : void 0
        });
      }
    });
  };

  WalkScore.constructURL = function(apiURL, params) {
    return Helpers.constructURL(apiURL, params);
  };

}).call(this);
