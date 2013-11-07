(function() {
  var CraigslistScraper, FillTemplate, GoogleMaps, RentMetrics, WalkScore, Yelp, async, jsdom, listingUtils, request, winston,
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

  winston = require('./winstonWrapper').winston;

  listingUtils = this;

  exports.getLatLong = function(listing) {
    return listing.Coordinates.Latitude + ',' + listing.Coordinates.Longitude;
  };

  exports.getAugmentedListingData = function(listing, user, callback) {
    return async.parallel([
      function(cb) {
        return async.map(user.commutes, function(commute, eachCb) {
          return GoogleMaps.getDirections(listingUtils.getLatLong(listing), commute.address, commute.mode, function(err, gmData) {
            if (err) {
              console.log(err);
            }
            return eachCb(null, {
              name: commute.name,
              data: gmData
            });
          });
        }, function(err, results) {
          if (err) {
            console.log(err);
          }
          return cb(null, results);
        });
      }, function(cb) {
        return WalkScore.getWalkScore(listing.Address, listing.Coordinates.Latitude, listing.Coordinates.Longitude, function(err, wsData) {
          if (err) {
            console.log(err);
          }
          return cb(null, wsData);
        });
      }, function(cb) {
        return WalkScore.getTransitScore(listing.County, 'CA', listing.Coordinates.Latitude, listing.Coordinates.Longitude, function(err, wsData) {
          if (err) {
            console.log(err);
          }
          return cb(null, wsData);
        });
      }, function(cb) {
        return async.map(user.yelpTerms, function(term, eachCb) {
          return Yelp.search(term, listingUtils.getLatLong(listing), function(err, data) {
            if (err) {
              eachCb(err);
            }
            return eachCb(null, {
              term: term,
              data: data
            });
          });
        }, function(err, results) {
          if (err) {
            console.log(err);
          }
          return cb(null, results);
        });
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
      return callback(null, apiData);
    });
  };

}).call(this);
