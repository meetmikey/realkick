request = require 'request'
jsdom = require 'jsdom'
Helpers = require './helpers'
_ = require 'underscore'

CraigslistScraper = this;

CraigslistScraper.scrape = (url, cb) ->
  CraigslistScraper.getHTML url,
    (err, body) ->
      if err
        cb err
      else
        jsdom.env body,
          ["http://code.jquery.com/jquery.js"],
          (err, window) ->
            if err
              cb err
            else
              cb null, CraigslistScraper.extractFields(window.$)


CraigslistScraper.getHTML = (url, cb) ->
  request url, (err, res, body) ->
    if err || res.statusCode != 200
      cb err
    else
      cb null, body

CraigslistScraper.extractFields = ($) ->
  return if not $?
  data = {}
  #TODO: remove manual hack for city
  data.address = $('#attributes > span').text() + ', San Francisco, CA'
  map = $('#map')
  data.latitude = $('#map')?.attr('data-latitude')
  data.longitude = $('#map')?.attr('data-longitude')
  data.title = $('.postingtitle')?.text()?.trim()
  if data.title
    data.neighborhood = CraigslistScraper.getNeighborhoodFromTitle(data.title)
    data.price = CraigslistScraper.getPriceFromTitle(data.title)

  data.image_thumbnails = _.map $('#thumbs > a'), (el) -> return $(el).attr('href')

  data.postingBodyHTML = $('#postingbody')?.html()?.trim()
  postingBodyText = $('#postingbody')?.text()?.trim().replace(/\n/g, '').replace(/\s{2,}/g, ' ')
  data.postingBodyTextPreview = Helpers.getFirstNWords(postingBodyText, 60)

  attributes = Helpers.convertJQueryArrayToHTMLArray $('.attrbubble'), $
  data.bedrooms = CraigslistScraper.getBedrooms(attributes)
  data.bathrooms = CraigslistScraper.getBathrooms(attributes)
  data.sqft = CraigslistScraper.getSqft(attributes)
  data

CraigslistScraper.getBedrooms = (htmlArray) ->
  return if not htmlArray? || not htmlArray.length
  bedrooms = undefined
  patt = new RegExp("<b>([0-9]*?)</b>BR", "g")
  htmlArray.forEach (att) ->
    matches = patt.exec(att)
    if matches
      bedrooms = Number matches[1]
  bedrooms

CraigslistScraper.getBathrooms = (htmlArray) ->
  return if not htmlArray? || not htmlArray.length
  bathrooms = undefined
  patt = new RegExp("<b>([0-9\.]*?)</b>Ba", "g")
  htmlArray.forEach (att) ->
    matches = patt.exec(att)
    if matches
      bathrooms = Number matches[1]
  bathrooms

CraigslistScraper.getSqft = (htmlArray) ->
  return if not htmlArray? || not htmlArray.length
  sqft = undefined
  patt = new RegExp("<b>([0-9]*?)</b>ft", "g")
  htmlArray.forEach (att) ->
    matches = patt.exec(att)
    if matches
      sqft = Number matches[1]
  sqft

CraigslistScraper.getPriceFromTitle = (title) ->
  return if not title?
  matches = title.match(/\$[0-9]*/g)
  matches[0] if matches?.length>0

CraigslistScraper.getNeighborhoodFromTitle = (title) ->
  return if not title?
  matches = title.match(/\(.*?\)/g)
  matches[matches.length - 1]?.replace("(", "").replace(")", "")