(function() {
  var template,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  template = "F";

  RealKick.View.Static.F = (function(_super) {

    __extends(F, _super);

    function F() {
      F.__super__.constructor.apply(this, arguments);
    }

    F.prototype.templateHTML = template;

    return F;

  })(RealKick.View.Base);

}).call(this);
