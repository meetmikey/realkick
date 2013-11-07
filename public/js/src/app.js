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
    init: function() {
      RealKick.Router.router = new RealKick.Router.Main();
      return Backbone.history.start();
    }
  };

  $(document).ready(function() {
    return RealKick.init();
  });

}).call(this);
