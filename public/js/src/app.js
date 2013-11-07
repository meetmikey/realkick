(function() {

  window.RealKick = {
    Constants: {},
    Model: {},
    Collection: {},
    Decorator: {},
    Helper: {},
    Router: {},
    View: {
      MainLayout: {}
    },
    getUserShortId: function() {
      var userShortId;
      userShortId = RealKick.Helper.LocalStore.get('userShortId');
      if (!userShortId) {
        userShortId = RealKick.Constants.defaultUserShortId;
        RealKick.Helper.LocalStore.set('userShortId', userShortId);
      }
      return userShortId;
    },
    initializeGlobalUser: function() {
      RealKick.globalUser = new RealKick.Model.User({
        shortId: RealKick.getUserShortId()
      });
      return RealKick.globalUser.fetch();
    },
    init: function() {
      RealKick.initializeGlobalUser();
      RealKick.Router.router = new RealKick.Router.Main();
      return Backbone.history.start();
    }
  };

  $(document).ready(function() {
    return RealKick.init();
  });

}).call(this);
