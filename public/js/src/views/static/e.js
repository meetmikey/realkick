(function() {
  var template,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  template = "E";

  RealKick.View.Static.E = (function(_super) {

    __extends(E, _super);

    function E() {
      E.__super__.constructor.apply(this, arguments);
    }

    E.prototype.templateHTML = template;

    return E;

  })(RealKick.View.Base);

}).call(this);
