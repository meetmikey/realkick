var mongoose = require('mongoose'),
    conf     = require ('../conf'),
    bases     = require ('bases'),
    constants = require ('../constants'),
    CounterModel = require ('./counter').CounterModel,
    Schema   = mongoose.Schema;

var commuteSchema = new Schema ({
    name: {type: String}
  , mode: {type: String}
  , address: {type: String}
});

var User = new Schema({
    email: {type: String, unique: true, lowercase: true},
  , owner1: {type: String},
  , owner2: {type: String},
  , commutes: {type: [commuteSchema], default :[]}
  , yelpTerms: [String]
});

mongoose.model('User', User);
exports.UserModel = mongoose.model('User');