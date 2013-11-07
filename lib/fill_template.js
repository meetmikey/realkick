(function() {
  var FillTemplate, fs, swig;

  swig = require('swig');

  fs = require('fs');

  FillTemplate = this;

  FillTemplate.compile = function(clData, apiData, userData) {
    var file;
    file = swig.renderFile('./src/templates/template.swig', {
      clData: clData,
      apiData: apiData,
      userData: userData
    });
    return fs.writeFileSync('out.html', file);
  };

}).call(this);
