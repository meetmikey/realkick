Helpers = require './helpers'
request = require 'request'
conf = require '../conf'

WalkScore = this

WalkScore.getWalkScore = (address, latitude, longitude, cb) ->
  apiURL = conf.WalkScore.WalkScoreURL
  params = 
    wsapikey : conf.WalkScore.APIToken
    format : 'json'
    address : address
    lat : latitude
    lon : longitude

  console.log 'walkscoreURL',  WalkScore.constructURL(apiURL, params)

  request WalkScore.constructURL(apiURL, params), (err, res, body)->
    if !err && res.statusCode == 200
      try
        jsonData = JSON.parse(body)
        cb null, jsonData
      catch e
        cb e
    else
      console.error 'invalid resposne from walkscore', {err : err, code : res?.statusCode}
      cb {err : err, code : res?.statusCode}

WalkScore.getTransitScore = (city, state, latitude, longitude, cb) ->
  apiURL = conf.WalkScore.TransitScoreURL
  params = 
    wsapikey : conf.WalkScore.APIToken
    format : 'json'
    city : city
    lat : latitude
    lon : longitude
    state : state

  console.log 'TransitScoreURL',  WalkScore.constructURL(apiURL, params)

  request WalkScore.constructURL(apiURL, params), (err, res, body)->
    if !err && res.statusCode == 200
      try
        jsonData = JSON.parse(body)
        cb null, jsonData
      catch e
        cb e
    else
      console.error 'invalid resposne from walkscore', {err : err, code : res?.statusCode}
      cb {err : err, code : res?.statusCode}


WalkScore.constructURL = (apiURL, params) ->
  Helpers.constructURL apiURL, params