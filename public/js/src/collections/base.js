(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  RealKick.Collection.Base = (function(_super) {

    __extends(Base, _super);

    function Base() {
      this.comparator = __bind(this.comparator, this);
      this.sortByField = __bind(this.sortByField, this);
      this.toggleSortOrder = __bind(this.toggleSortOrder, this);
      Base.__super__.constructor.apply(this, arguments);
    }

    Base.prototype.compareBy = {};

    Base.prototype.sortKey = '_id';

    Base.prototype.sortOrder = 'asc';

    Base.prototype.toggleSortOrder = function() {
      if (this.sortOrder === 'asc') {
        return this.sortOrder = 'desc';
      } else {
        return this.sortOrder = 'asc';
      }
    };

    Base.prototype.sortByField = function(field) {
      if (this.sortKey === field) {
        this.toggleSortOrder();
      } else {
        this.sortOrder = 'asc';
        this.sortKey = field;
      }
      return this.sort();
    };

    Base.prototype.comparator = function(model1, model2) {
      var key, value1, value2;
      key = this.sortKey;
      value1 = this.compareBy[key] != null ? this.compareBy[key](model1) : model1.get(key);
      value2 = this.compareBy[key] != null ? this.compareBy[key](model2) : model2.get(key);
      if (value1 === value2) {
        return 0;
      }
      if (this.sortOrder === 'asc') {
        if (value1 < value2) {
          return -1;
        } else {
          return 1;
        }
      } else if (this.sortOrder === 'desc') {
        if (value1 > value2) {
          return -1;
        } else {
          return 1;
        }
      } else {
        return 0;
      }
    };

    return Base;

  })(Backbone.Collection);

}).call(this);
