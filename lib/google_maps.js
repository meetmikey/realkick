(function() {
  var GoogleMaps, Helpers, conf, departure_time, request;

  Helpers = require('./helpers');

  request = require('request');

  conf = require('../conf');

  GoogleMaps = this;

  departure_time = new Date(2013, 10, 7, 8, 0, 0, 0);

  GoogleMaps.getDirections = function(from, to, mode, cb) {
    var apiURL, params;
    apiURL = conf.GoogleMaps.DirectionsURL;
    params = {
      origin: from,
      destination: to,
      mode: mode,
      departure_time: departure_time.getTime(),
      sensor: false
    };
    return request(GoogleMaps.constructURL(apiURL, params), function(err, res, body) {
      var jsonData;
      if (!err && res.statusCode === 200) {
        jsonData = JSON.parse(body);
        return cb(null, GoogleMaps.extractDurationDistance(jsonData));
      } else {
        console.error('invalid resposne from GoogleMaps', {
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

  GoogleMaps.constructURL = function(apiURL, params) {
    return Helpers.constructURL(apiURL, params);
  };

  GoogleMaps.extractDurationDistance = function(jsonData) {
    var _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
    console.log(jsonData);
    return {
      distance: (_ref = jsonData.routes) != null ? (_ref1 = _ref[0]) != null ? (_ref2 = _ref1.legs) != null ? _ref2[0].distance : void 0 : void 0 : void 0,
      duration: (_ref3 = jsonData.routes) != null ? (_ref4 = _ref3[0]) != null ? (_ref5 = _ref4.legs) != null ? _ref5[0].duration : void 0 : void 0 : void 0
    };
  };

}).call(this);
