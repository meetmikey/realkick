(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  RealKick.Router.Main = (function(_super) {

    __extends(Main, _super);

    function Main() {
      this.render = __bind(this.render, this);
      this.scrollToTop = __bind(this.scrollToTop, this);
      this.renderLayout = __bind(this.renderLayout, this);
      this.listing = __bind(this.listing, this);
      this.index = __bind(this.index, this);
      this.initialize = __bind(this.initialize, this);
      Main.__super__.constructor.apply(this, arguments);
    }

    Main.prototype.routes = {
      '': 'index',
      'listing/:listingId': 'listing'
    };

    Main.prototype.initialize = function() {};

    Main.prototype.index = function() {
      return this.render('Index', {
        listingId: '1'
      });
    };

    Main.prototype.listing = function(listingId) {
      return this.render('Listing', {
        listingId: listingId
      });
    };

    Main.prototype.renderLayout = function() {
      if (!this._layout) {
        this._layout = new RealKick.View.MainLayout.Layout();
        this._layout.render();
      }
      this._layout.reloadSubView('header');
      return this._layout.reloadSubView('footer');
    };

    Main.prototype.scrollToTop = function() {
      return $('html, body').animate({
        scrollTop: 0
      }, 'slow');
    };

    Main.prototype.render = function(viewClassName, data) {
      this.renderLayout();
      this._layout.teardownSubView('rkContent');
      this._layout.addAndRenderSubview('rkContent', {
        viewClassName: viewClassName,
        selector: '#rkContent'
      }, data);
      return this.scrollToTop();
    };

    return Main;

  })(Backbone.Router);

}).call(this);
