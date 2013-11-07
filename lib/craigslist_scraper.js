(function() {
  var CraigslistScraper, Helpers, jsdom, request, _;

  request = require('request');

  jsdom = require('jsdom');

  Helpers = require('./helpers');

  _ = require('underscore');

  CraigslistScraper = this;

  CraigslistScraper.scrape = function(url, cb) {
    return CraigslistScraper.getHTML(url, function(err, body) {
      if (err) {
        return cb(err);
      } else {
        return jsdom.env(body, ["http://code.jquery.com/jquery.js"], function(err, window) {
          if (err) {
            return cb(err);
          } else {
            return cb(null, CraigslistScraper.extractFields(window.$));
          }
        });
      }
    });
  };

  CraigslistScraper.getHTML = function(url, cb) {
    return request(url, function(err, res, body) {
      if (err || res.statusCode !== 200) {
        return cb(err);
      } else {
        return cb(null, body);
      }
    });
  };

  CraigslistScraper.extractFields = function($) {
    var attributes, data, map, postingBodyText, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7;
    if ($ == null) {
      return;
    }
    data = {};
    data.address = $('#attributes > span').text() + ', San Francisco, CA';
    map = $('#map');
    data.latitude = (_ref = $('#map')) != null ? _ref.attr('data-latitude') : void 0;
    data.longitude = (_ref1 = $('#map')) != null ? _ref1.attr('data-longitude') : void 0;
    data.title = (_ref2 = $('.postingtitle')) != null ? (_ref3 = _ref2.text()) != null ? _ref3.trim() : void 0 : void 0;
    if (data.title) {
      data.neighborhood = CraigslistScraper.getNeighborhoodFromTitle(data.title);
      data.price = CraigslistScraper.getPriceFromTitle(data.title);
    }
    data.image_thumbnails = _.map($('#thumbs > a'), function(el) {
      return $(el).attr('href');
    });
    data.postingBodyHTML = (_ref4 = $('#postingbody')) != null ? (_ref5 = _ref4.html()) != null ? _ref5.trim() : void 0 : void 0;
    postingBodyText = (_ref6 = $('#postingbody')) != null ? (_ref7 = _ref6.text()) != null ? _ref7.trim().replace(/\n/g, '').replace(/\s{2,}/g, ' ') : void 0 : void 0;
    data.postingBodyTextPreview = Helpers.getFirstNWords(postingBodyText, 60);
    attributes = Helpers.convertJQueryArrayToHTMLArray($('.attrbubble'), $);
    data.bedrooms = CraigslistScraper.getBedrooms(attributes);
    data.bathrooms = CraigslistScraper.getBathrooms(attributes);
    data.sqft = CraigslistScraper.getSqft(attributes);
    return data;
  };

  CraigslistScraper.getBedrooms = function(htmlArray) {
    var bedrooms, patt;
    if ((htmlArray == null) || !htmlArray.length) {
      return;
    }
    bedrooms = void 0;
    patt = new RegExp("<b>([0-9]*?)</b>BR", "g");
    htmlArray.forEach(function(att) {
      var matches;
      matches = patt.exec(att);
      if (matches) {
        return bedrooms = Number(matches[1]);
      }
    });
    return bedrooms;
  };

  CraigslistScraper.getBathrooms = function(htmlArray) {
    var bathrooms, patt;
    if ((htmlArray == null) || !htmlArray.length) {
      return;
    }
    bathrooms = void 0;
    patt = new RegExp("<b>([0-9\.]*?)</b>Ba", "g");
    htmlArray.forEach(function(att) {
      var matches;
      matches = patt.exec(att);
      if (matches) {
        return bathrooms = Number(matches[1]);
      }
    });
    return bathrooms;
  };

  CraigslistScraper.getSqft = function(htmlArray) {
    var patt, sqft;
    if ((htmlArray == null) || !htmlArray.length) {
      return;
    }
    sqft = void 0;
    patt = new RegExp("<b>([0-9]*?)</b>ft", "g");
    htmlArray.forEach(function(att) {
      var matches;
      matches = patt.exec(att);
      if (matches) {
        return sqft = Number(matches[1]);
      }
    });
    return sqft;
  };

  CraigslistScraper.getPriceFromTitle = function(title) {
    var matches;
    if (title == null) {
      return;
    }
    matches = title.match(/\$[0-9]*/g);
    if ((matches != null ? matches.length : void 0) > 0) {
      return matches[0];
    }
  };

  CraigslistScraper.getNeighborhoodFromTitle = function(title) {
    var matches, _ref;
    if (title == null) {
      return;
    }
    matches = title.match(/\(.*?\)/g);
    return (_ref = matches[matches.length - 1]) != null ? _ref.replace("(", "").replace(")", "") : void 0;
  };

}).call(this);
