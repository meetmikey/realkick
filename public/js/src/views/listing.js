(function() {
  var template,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  template = "<h3>{{address}}</h3>\n\n<div>List price: {{listingPrice}}</div>\n<div>Number of bedrooms: {{numBedrooms}}</div>\n<div>Number of bathrooms: {{numBathrooms}}</div>\n<div>Square feet: {{squareFeet}}</div>\n<div>Listing date: {{listingDate}}</div>\n<div>Has garage parking? {{#if hasGarageParking}}yes{{else}}no{{/if}}</div>\n<div>Year built: {{yearBuilt}}</div>\n\n{{#each comments}}\n  <img src='{{userImageURL}}' />\n  {{text}}\n{{/each}}  \n\n{{#each photos}}\n  <img src='{{Location}}' />\n{{/each}}";

  RealKick.View.Listing = (function(_super) {

    __extends(Listing, _super);

    function Listing() {
      this.getTemplateData = __bind(this.getTemplateData, this);
      this.postRender = __bind(this.postRender, this);
      this.postInitialize = __bind(this.postInitialize, this);
      Listing.__super__.constructor.apply(this, arguments);
    }

    Listing.prototype.templateHTML = template;

    Listing.prototype.listing = null;

    Listing.prototype.postInitialize = function() {
      this.listing = new RealKick.Model.Listing({
        id: this.listingId
      });
      return this.commentsCollection = new RealKick.Collection.Comment;
    };

    Listing.prototype.postRender = function() {
      var _this = this;
      return this.listing.fetch({
        success: function() {
          _this.commentsCollection.set(_this.listing.get('comments'));
          return _this.renderTemplate();
        },
        error: function() {
          return console.log('failed to get listing: ', _this.listing);
        }
      });
    };

    Listing.prototype.getTemplateData = function() {
      var data;
      data = this.listing.decorate();
      data.comments = _.invoke(this.commentsCollection.models, 'decorate');
      return data;
    };

    return Listing;

  })(RealKick.View.Base);

}).call(this);
