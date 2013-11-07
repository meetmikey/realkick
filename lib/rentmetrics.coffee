request = require 'request'
_ = require 'underscore'
conf = require '../conf'
Helpers = require './helpers'

RentMetrics = this

#constants
DEFAULT_DISTANCE = 0.5
DEFAULT_START_DATE = Date.now() - 60*60*24*1000*120

rentMetricsAPI = conf.RentMetrics.URL
apiToken = conf.RentMetrics.APIToken

RentMetrics.getAveragePrices = (data, cb) ->
  requestParams =
    address : data.address
    bedrooms : data.bedrooms
    start_date : RentMetrics.formatDate(DEFAULT_START_DATE)
    max_distance_mi : DEFAULT_DISTANCE
    api_token : apiToken

  request RentMetrics.constructURL(requestParams), (err, res, body)=>
    if !err && res.statusCode == 200
      jsonBody = JSON.parse(body)
      cb null, RentMetrics.computePricePercentiles jsonBody
    else
      console.log 'invalid response from rent metrics', {err : err, code : res.statusCode}
      cb err

RentMetrics.computePricePercentiles = (rmJSON) ->
  dataPointsRent = []
  dataPointsRentPerSqFt = []

  properties = rmJSON.collection
  properties.forEach (property) ->
    if property.latest_prices
      property.latest_prices.forEach (price)->
        if price.eff_rent
          dataPointsRent.push price.eff_rent
        if price.eff_rent_per_sq_ft
          dataPointsRentPerSqFt.push price.eff_rent_per_sq_ft

  dataPointsRent.sort()
  dataPointsRentPerSqFt.sort()

  percentiles =
    perSqft :
      .25 : RentMetrics.getPercentileFromArray(dataPointsRentPerSqFt, 0.25)    
      .5 : RentMetrics.getPercentileFromArray(dataPointsRentPerSqFt, 0.5)    
      .75 : RentMetrics.getPercentileFromArray(dataPointsRentPerSqFt, 0.75)    
    total :
      .25 : RentMetrics.getPercentileFromArray(dataPointsRent, 0.25)    
      .5 : RentMetrics.getPercentileFromArray(dataPointsRent, 0.5)    
      .75 : RentMetrics.getPercentileFromArray(dataPointsRent, 0.75)    

  percentiles

RentMetrics.getPercentileFromArray = (array, percentile) ->
  index = array.length*percentile - percentile
  decimalPart = index % 1
  #take weighted if not int
  if decimalPart == 0
    val = array[index]
    Math.round(val*100)/100
  else
    val = array[index-decimalPart]*(1-decimalPart) + 
          decimalPart*array[index+(1-decimalPart)]
    Math.round(val*100)/100

RentMetrics.constructURL = (params) ->
  Helpers.constructURL rentMetricsAPI, params

RentMetrics.formatDate = (unixTS) ->
  date = new Date(unixTS)
  year = date.getFullYear()
  month = date.getMonth()+1
  day = date.getDate()
  return year+'-'+month+'-'+day