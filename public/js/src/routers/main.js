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
      this.staticJ = __bind(this.staticJ, this);
      this.staticI = __bind(this.staticI, this);
      this.staticH = __bind(this.staticH, this);
      this.staticG = __bind(this.staticG, this);
      this.staticF = __bind(this.staticF, this);
      this.staticE = __bind(this.staticE, this);
      this.staticD = __bind(this.staticD, this);
      this.staticC = __bind(this.staticC, this);
      this.staticB = __bind(this.staticB, this);
      this.staticA = __bind(this.staticA, this);
      this.listing = __bind(this.listing, this);
      this.index = __bind(this.index, this);
      this.initialize = __bind(this.initialize, this);
      Main.__super__.constructor.apply(this, arguments);
    }

    Main.prototype.routes = {
      'home': 'index',
      '': 'index',
      'listing/:listingId': 'listing',
      'a': 'staticA',
      'b': 'staticB',
      'c': 'staticC',
      'd': 'staticD',
      'e': 'staticE',
      'f': 'staticF',
      'g': 'staticG',
      'h': 'staticH',
      'i': 'staticI',
      'j': 'staticJ'
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

    Main.prototype.staticA = function() {
      return this.render('Static.A');
    };

    Main.prototype.staticB = function() {
      return this.render('Static.B');
    };

    Main.prototype.staticC = function() {
      return this.render('Static.C');
    };

    Main.prototype.staticD = function() {
      return this.render('Static.D');
    };

    Main.prototype.staticE = function() {
      return this.render('Static.E');
    };

    Main.prototype.staticF = function() {
      return this.render('Static.F');
    };

    Main.prototype.staticG = function() {
      return this.render('Static.G');
    };

    Main.prototype.staticH = function() {
      return this.render('Static.H');
    };

    Main.prototype.staticI = function() {
      return this.render('Static.I');
    };

    Main.prototype.staticJ = function() {
      return this.render('Static.J');
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
