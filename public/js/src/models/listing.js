(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  RealKick.Model.Listing = (function(_super) {

    __extends(Listing, _super);

    function Listing() {
      Listing.__super__.constructor.apply(this, arguments);
    }

    Listing.prototype.urlRoot = 'listing';

    Listing.prototype.decorator = RealKick.Decorator.Listing;

    return Listing;

  })(RealKick.Model.Base);

}).call(this);
