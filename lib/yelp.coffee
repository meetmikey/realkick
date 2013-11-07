yelp = require "yelp"
conf = require "../conf"

yelpClient = yelp.createClient 
  consumer_key: conf.Yelp.consumer_key, 
  consumer_secret: conf.Yelp.consumer_secret,
  token: conf.Yelp.token,
  token_secret: conf.Yelp.token_secret

Yelp = this

Yelp.search = (term, ll, cb) ->
  yelpClient.search {term : term, ll : ll, limit : 3}, (err, data) ->
    if err
      cb err
    else
      cb null, data