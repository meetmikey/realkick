Helpers = require './helpers'
request = require 'request'
conf = require '../conf'

GoogleMaps = this
departure_time = new Date(2013, 10, 7, 8, 0, 0, 0)

GoogleMaps.getDirections = (from, to, mode, cb) ->
  apiURL = conf.GoogleMaps.DirectionsURL
  params = 
    origin : from
    destination : to
    mode : mode
    departure_time : departure_time.getTime()
    sensor : false

  #TODO: make opposite request to get round trip time
  request GoogleMaps.constructURL(apiURL, params), (err, res, body)->
    if !err && res.statusCode == 200
      jsonData = JSON.parse(body)
      cb null, GoogleMaps.extractDurationDistance jsonData
    else
      console.error 'invalid resposne from GoogleMaps', {err : err, code : res?.statusCode}
      cb {err : err, code : res?.statusCode}

GoogleMaps.constructURL = (apiURL, params) ->
  Helpers.constructURL(apiURL, params)

GoogleMaps.extractDurationDistance = (jsonData) ->
  console.log jsonData
  distance : jsonData.routes?[0]?.legs?[0].distance
  duration : jsonData.routes?[0]?.legs?[0].duration
