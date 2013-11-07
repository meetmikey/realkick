(function() {
  var template,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  template = "A\n<a href='#b'>B</a>";

  RealKick.View.Static.A = (function(_super) {

    __extends(A, _super);

    function A() {
      A.__super__.constructor.apply(this, arguments);
    }

    A.prototype.templateHTML = template;

    return A;

  })(RealKick.View.Base);

}).call(this);
