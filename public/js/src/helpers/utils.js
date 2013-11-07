(function() {
  var RealKickHelperUtils,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  RealKickHelperUtils = (function() {

    function RealKickHelperUtils() {
      this.getObjectFromString = __bind(this.getObjectFromString, this);
      this.getClassFromName = __bind(this.getClassFromName, this);
    }

    RealKickHelperUtils.prototype.getClassFromName = function(className) {
      return this.getObjectFromString(className);
    };

    RealKickHelperUtils.prototype.getObjectFromString = function(str) {
      var obj, strArray,
        _this = this;
      strArray = str.split('.');
      obj = window || this;
      _.each(strArray, function(strArrayElement) {
        return obj = obj[strArrayElement];
      });
      return obj;
    };

    return RealKickHelperUtils;

  })();

  RealKick.Helper.Utils = new RealKickHelperUtils();

}).call(this);
