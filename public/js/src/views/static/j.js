(function() {
  var template,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  template = "J";

  RealKick.View.Static.J = (function(_super) {

    __extends(J, _super);

    function J() {
      J.__super__.constructor.apply(this, arguments);
    }

    J.prototype.templateHTML = template;

    return J;

  })(RealKick.View.Base);

}).call(this);
