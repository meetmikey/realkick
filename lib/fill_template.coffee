# lib to fill HTML template based on data received from scrapers, augmenters
swig = require 'swig'
fs = require 'fs'

FillTemplate = this


FillTemplate.compile = (clData, apiData, userData) ->
  file = swig.renderFile('./src/templates/template.swig', {
    clData: clData,
    apiData: apiData,
    userData : userData
  });

  fs.writeFileSync('out.html', file)

#FillTemplate.compile(clData, apiData, userData)
