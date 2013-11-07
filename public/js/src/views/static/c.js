(function() {
  var template,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  template = "C";

  RealKick.View.Static.C = (function(_super) {

    __extends(C, _super);

    function C() {
      C.__super__.constructor.apply(this, arguments);
    }

    C.prototype.templateHTML = template;

    return C;

  })(RealKick.View.Base);

}).call(this);
