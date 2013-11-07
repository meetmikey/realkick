_ = require 'underscore'
querystring = require 'querystring'

Helpers = this

Helpers.convertJQueryArrayToHTMLArray = (jqueryArray, $) ->
  return if not jqueryArray?
  _.map jqueryArray, (el) -> return $(el).html()

Helpers.constructURL = (apiURL, params) ->
  apiURL + '?' + querystring.stringify params

Helpers.getFirstNWords = (str, n) ->
  return if not str?
  split = str.split(' ')
  if split.length > n
    return split.slice(0,n-1).join(' ')
  else
    return split.slice(0,str.length-1).join(' ')