(function() {
  var template,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  template = "<h3>{{address}}</h3>\n\n<div>List price: {{listingPrice}}</div>\n<div>Number of bedrooms: {{numBedrooms}}</div>\n<div>Number of bathrooms: {{numBathrooms}}</div>\n<div>Square feet: {{squareFeet}}</div>\n<div>Listing date: {{listingDate}}</div>\n<div>Has garage parking? {{#if hasGarageParking}}yes{{else}}no{{/if}}</div>\n<div>Year built: {{yearBuilt}}</div>\n\n{{#each photos}}\n  <img src='{{Location}}' />\n{{/each}}";

  RealKick.View.User = (function(_super) {

    __extends(User, _super);

    function User() {
      this.getTemplateData = __bind(this.getTemplateData, this);
      this.postRender = __bind(this.postRender, this);
      User.__super__.constructor.apply(this, arguments);
    }

    User.prototype.templateHTML = template;

    User.prototype.postRender = function() {
      var _this = this;
      return this.listing.fetch({
        success: function() {
          return _this.renderTemplate();
        },
        error: function() {
          return console.log('failed to get listing: ', _this.listing);
        }
      });
    };

    User.prototype.getTemplateData = function() {
      var data;
      data = this.listing.decorate();
      return data;
    };

    return User;

  })(RealKick.View.Base);

}).call(this);
