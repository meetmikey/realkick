(function() {
  var template,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  template = "G";

  RealKick.View.Static.G = (function(_super) {

    __extends(G, _super);

    function G() {
      G.__super__.constructor.apply(this, arguments);
    }

    G.prototype.templateHTML = template;

    return G;

  })(RealKick.View.Base);

}).call(this);
