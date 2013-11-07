(function() {
  var LocalStore,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  LocalStore = (function() {

    function LocalStore(args) {
      this.args = args;
      this.clear = __bind(this.clear, this);
      this.remove = __bind(this.remove, this);
      this.set = __bind(this.set, this);
      this.get = __bind(this.get, this);
      this.getKey = __bind(this.getKey, this);
      this.store = window.localStorage;
    }

    LocalStore.prototype.supportsLocalStorage = function() {
      return typeof window.localStorage !== 'undefined';
    };

    LocalStore.prototype.getEnv = function() {
      return 'production';
    };

    LocalStore.prototype.getKey = function(key) {
      var env;
      env = this.getEnv();
      if (env === 'production') {
        return key;
      } else {
        return "" + env + "-" + key;
      }
    };

    LocalStore.prototype.get = function(key) {
      var raw, val;
      raw = this.store.getItem(this.getKey(key));
      try {
        val = JSON.parse(raw);
        return val;
      } catch (e) {
        console.log('local storage get exception');
        return raw;
      }
    };

    LocalStore.prototype.set = function(key, value) {
      return this.store.setItem(this.getKey(key), JSON.stringify(value));
    };

    LocalStore.prototype.remove = function(key) {
      return this.store.removeItem(this.getKey(key));
    };

    LocalStore.prototype.clear = function() {
      return this.store.clear();
    };

    return LocalStore;

  })();

  RealKick.Helper.LocalStore = new LocalStore();

}).call(this);
