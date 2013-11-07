request = require 'request'
jsdom = require 'jsdom'
async = require 'async'
RentMetrics = require './rentmetrics'
WalkScore = require './walkscore'
GoogleMaps = require './google_maps'
Yelp = require './yelp'
CraigslistScraper = require './craigslist_scraper'
FillTemplate = require './fill_template'
winston = require('./winstonWrapper').winston

listingUtils = this

exports.getLatLong = (listing) ->
  listing.Coordinates.Latitude + ',' + listing.Coordinates.Longitude

exports.getAugmentedListingData = (listing, user, callback) =>

  async.parallel [
    (cb) ->
      #compute commuting time for self
      async.map user.commutes,
        (commute, eachCb) ->
          GoogleMaps.getDirections listingUtils.getLatLong(listing), commute.address, commute.mode, (err, gmData) ->          
            console.log err if err
            eachCb null, {name : commute.name, data : gmData}
        (err, results) ->
          console.log err if err
          cb null, results
    (cb) ->
      #compute walkscore
      WalkScore.getWalkScore listing.Address, listing.Coordinates.Latitude, listing.Coordinates.Longitude, (err, wsData) ->
        console.log err if err
        cb null, wsData
    (cb) ->
      #get transit data
      WalkScore.getTransitScore listing.County, 'CA', listing.Coordinates.Latitude, listing.Coordinates.Longitude, (err, wsData) ->
        console.log err if err
        cb null, wsData
    (cb) ->
      #get yelp data for each search term
      async.map user.yelpTerms,
        (term, eachCb) ->
          Yelp.search term,
            listingUtils.getLatLong(listing),
            (err, data) ->
              eachCb(err) if err
              eachCb null, {term : term, data: data}
        (err, results)->
          console.log err if err
          cb null, results
  ],
  (err, results) ->
    apiData =
      googleMaps : results[0]
      walkScore : results[1]
      transitScore : results[2]
      yelp : results[3]

    console.log apiData
    callback null, apiData
