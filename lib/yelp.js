(function() {
  var Yelp, conf, yelp, yelpClient;

  yelp = require("yelp");

  conf = require("../conf");

  yelpClient = yelp.createClient({
    consumer_key: conf.Yelp.consumer_key,
    consumer_secret: conf.Yelp.consumer_secret,
    token: conf.Yelp.token,
    token_secret: conf.Yelp.token_secret
  });

  Yelp = this;

  Yelp.search = function(term, ll, cb) {
    return yelpClient.search({
      term: term,
      ll: ll
    }, function(err, data) {
      if (err) {
        return cb(err);
      } else {
        return cb(null, data);
      }
    });
  };

}).call(this);
