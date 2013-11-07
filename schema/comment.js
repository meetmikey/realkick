var mongoose = require('mongoose'),
    conf     = require ('../conf'),
    Schema   = mongoose.Schema;

var Comment = new Schema({
    shortUserId: {type: Number}
  , shortListingId: {type: Number}
  , text: {type: String}
  , type: {type: String, enum: ['yes', 'no', 'question']}
  , userImageURL: {type: String}
});

mongoose.model('Comment', Comment);
exports.CommentModel = mongoose.model('Comment');