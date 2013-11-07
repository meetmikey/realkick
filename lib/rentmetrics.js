(function() {
  var DEFAULT_DISTANCE, DEFAULT_START_DATE, Helpers, RentMetrics, apiToken, conf, rentMetricsAPI, request, _;

  request = require('request');

  _ = require('underscore');

  conf = require('../conf');

  Helpers = require('./helpers');

  RentMetrics = this;

  DEFAULT_DISTANCE = 0.5;

  DEFAULT_START_DATE = Date.now() - 60 * 60 * 24 * 1000 * 120;

  rentMetricsAPI = conf.RentMetrics.URL;

  apiToken = conf.RentMetrics.APIToken;

  RentMetrics.getAveragePrices = function(data, cb) {
    var requestParams,
      _this = this;
    requestParams = {
      address: data.address,
      bedrooms: data.bedrooms,
      start_date: RentMetrics.formatDate(DEFAULT_START_DATE),
      max_distance_mi: DEFAULT_DISTANCE,
      api_token: apiToken
    };
    return request(RentMetrics.constructURL(requestParams), function(err, res, body) {
      var jsonBody;
      if (!err && res.statusCode === 200) {
        jsonBody = JSON.parse(body);
        return cb(null, RentMetrics.computePricePercentiles(jsonBody));
      } else {
        console.log('invalid response from rent metrics', {
          err: err,
          code: res.statusCode
        });
        return cb(err);
      }
    });
  };

  RentMetrics.computePricePercentiles = function(rmJSON) {
    var dataPointsRent, dataPointsRentPerSqFt, percentiles, properties;
    dataPointsRent = [];
    dataPointsRentPerSqFt = [];
    properties = rmJSON.collection;
    properties.forEach(function(property) {
      if (property.latest_prices) {
        return property.latest_prices.forEach(function(price) {
          if (price.eff_rent) {
            dataPointsRent.push(price.eff_rent);
          }
          if (price.eff_rent_per_sq_ft) {
            return dataPointsRentPerSqFt.push(price.eff_rent_per_sq_ft);
          }
        });
      }
    });
    dataPointsRent.sort();
    dataPointsRentPerSqFt.sort();
    percentiles = {
      perSqft: {
        .25: RentMetrics.getPercentileFromArray(dataPointsRentPerSqFt, 0.25),
        .5: RentMetrics.getPercentileFromArray(dataPointsRentPerSqFt, 0.5),
        .75: RentMetrics.getPercentileFromArray(dataPointsRentPerSqFt, 0.75)
      },
      total: {
        .25: RentMetrics.getPercentileFromArray(dataPointsRent, 0.25),
        .5: RentMetrics.getPercentileFromArray(dataPointsRent, 0.5),
        .75: RentMetrics.getPercentileFromArray(dataPointsRent, 0.75)
      }
    };
    return percentiles;
  };

  RentMetrics.getPercentileFromArray = function(array, percentile) {
    var decimalPart, index, val;
    index = array.length * percentile - percentile;
    decimalPart = index % 1;
    if (decimalPart === 0) {
      val = array[index];
      return Math.round(val * 100) / 100;
    } else {
      val = array[index - decimalPart] * (1 - decimalPart) + decimalPart * array[index + (1 - decimalPart)];
      return Math.round(val * 100) / 100;
    }
  };

  RentMetrics.constructURL = function(params) {
    return Helpers.constructURL(rentMetricsAPI, params);
  };

  RentMetrics.formatDate = function(unixTS) {
    var date, day, month, year;
    date = new Date(unixTS);
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    return year + '-' + month + '-' + day;
  };

}).call(this);
