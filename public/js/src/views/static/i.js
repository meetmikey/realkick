(function() {
  var template,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  template = "I";

  RealKick.View.Static.I = (function(_super) {

    __extends(I, _super);

    function I() {
      I.__super__.constructor.apply(this, arguments);
    }

    I.prototype.templateHTML = template;

    return I;

  })(RealKick.View.Base);

}).call(this);
