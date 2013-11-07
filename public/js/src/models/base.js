(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  RealKick.Model.Base = (function(_super) {

    __extends(Base, _super);

    function Base() {
      this.decorate = __bind(this.decorate, this);
      Base.__super__.constructor.apply(this, arguments);
    }

    Base.prototype.decorate = function() {
      if (this.decorator) {
        return this.decorator.decorate(this);
      }
      return {};
    };

    return Base;

  })(Backbone.Model);

}).call(this);