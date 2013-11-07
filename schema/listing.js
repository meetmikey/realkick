var mongoose = require('mongoose'),
    conf     = require ('../conf'),
    Schema   = mongoose.Schema;

var Listing = new Schema({
    address: {type: String}
  , numBedrooms: {type: Number}
  , numBathrooms: {type: Number}
  , squareFeet: {type: Number}
});

mongoose.model('Listing', Listing);
exports.ListingModel = mongoose.model('Listing');