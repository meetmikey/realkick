(function() {
  var CraigslistScraper, FillTemplate, GoogleMaps, RentMetrics, WalkScore, Yelp, async, jsdom, listingUtils, request,
    _this = this;

  request = require('request');

  jsdom = require('jsdom');

  async = require('async');

  RentMetrics = require('./rentmetrics');

  WalkScore = require('./walkscore');

  GoogleMaps = require('./google_maps');

  Yelp = require('./yelp');

  CraigslistScraper = require('./craigslist_scraper');

  FillTemplate = require('./fill_template');

  listingUtils = this;

  exports.getLatLong = function(listing) {
    return listing.Coordinates.Latitude + ',' + listing.Coordinates.Longitude;
  };

  exports.getAugmentedListingData = function(listing, user, callback) {
    return async.parallel([
      function(cb) {
        return async.eachSeries(user.commutes, function(commute, eachCb) {
          return GoogleMaps.getDirections(listingUtils.getLatLong(listing), commute.address, commute.mode, function(err, gmData) {
            if (err) {
              console.log(err);
            }
            console.log(commute);
            console.log(gmData);
            return eachCb(null, gmData);
          });
        }, function(err, results) {
          if (err) {
            console.log(err);
          }
          console.log('THE RESULTS', results);
          return cb(null, results);
        });
      }, function(cb) {
        /*
        WalkScore.getWalkScore listing.Address, listing.Coordinates.Latitude, listing.Coordinates.Longitude, (err, wsData) ->
          console.log err if err
          cb null, wsData
        */
        return cb(null);
      }, function(cb) {
        return WalkScore.getTransitScore(listing.County, listing.State, listing.Coordinates.Latitude, listing.Coordinates.Longitude, function(err, wsData) {
          if (err) {
            console.log(err);
          }
          return cb(null, wsData);
        });
      }, function(cb) {
        /*
        async.eachSeries user.yelpTerms,
          (term, eachCb) ->
            Yelp.search term,
              listingUtils.getLatLong(listing),
              (err, data) ->
                eachCb(err) if err
                console.log 'YELP DATA', data
                eachCb null, {term : data}
          (err, results)->
            console.log results
            console.log err if err
            cb null, results
        */
        return cb(null, '');
      }
    ], function(err, results) {
      var apiData;
      apiData = {
        googleMaps: results[0],
        walkScore: results[1],
        transitScore: results[2],
        yelp: results[3]
      };
      console.log(apiData);
      return callback(apiData);
    });
  };

}).call(this);
