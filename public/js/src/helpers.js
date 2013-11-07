(function() {
  var Helpers, querystring, _;

  _ = require('underscore');

  querystring = require('querystring');

  Helpers = this;

  Helpers.convertJQueryArrayToHTMLArray = function(jqueryArray, $) {
    if (jqueryArray == null) {
      return;
    }
    return _.map(jqueryArray, function(el) {
      return $(el).html();
    });
  };

  Helpers.constructURL = function(apiURL, params) {
    return apiURL + '?' + querystring.stringify(params);
  };

  Helpers.getFirstNWords = function(str, n) {
    var split;
    if (str == null) {
      return;
    }
    split = str.split(' ');
    if (split.length > n) {
      return split.slice(0, n - 1).join(' ');
    } else {
      return split.slice(0, str.length - 1).join(' ');
    }
  };

}).call(this);
