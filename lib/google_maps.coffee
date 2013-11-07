Helpers = require './helpers'
request = require 'request'
conf = require '../conf'

GoogleMaps = this

GoogleMaps.getDirections = (from, to, mode, cb) ->
  apiURL = conf.GoogleMaps.DirectionsURL
  params = 
    origin : from
    destination : to
    mode : mode
    departure_time : Date.now() - (Date.now % 3600*24) + 16*24*3600 #8 AM PST
    sensor : false

  #TODO: make opposite request to get round trip time
  request GoogleMaps.constructURL(apiURL, params), (err, res, body)->
    if !err && res.statusCode == 200
      try
        jsonData = JSON.parse(body)
        cb null, GoogleMaps.extractDurationDistance jsonData
      catch e
        cb e
    else
      console.error 'invalid resposne from GoogleMaps', {err : err, code : res?.statusCode}
      cb {err : err, code : res?.statusCode}

GoogleMaps.constructURL = (apiURL, params) ->
  Helpers.constructURL(apiURL, params)

GoogleMaps.extractDurationDistance = (jsonData) ->
  console.log jsonData
  distance : jsonData.routes?[0]?.legs?[0].distance
  duration : jsonData.routes?[0]?.legs?[0].duration
