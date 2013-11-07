(function() {
  var template,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  template = "H";

  RealKick.View.Static.H = (function(_super) {

    __extends(H, _super);

    function H() {
      H.__super__.constructor.apply(this, arguments);
    }

    H.prototype.templateHTML = template;

    return H;

  })(RealKick.View.Base);

}).call(this);
