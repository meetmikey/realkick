(function() {
  var template,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  template = "<div id=\"rkContent\"></div>";

  RealKick.View.MainLayout.Layout = (function(_super) {

    __extends(Layout, _super);

    function Layout() {
      this.postRender = __bind(this.postRender, this);
      this.preInitialize = __bind(this.preInitialize, this);
      this.scrollToAnchor = __bind(this.scrollToAnchor, this);
      Layout.__super__.constructor.apply(this, arguments);
    }

    Layout.prototype.templateHTML = template;

    Layout.prototype.events = {
      'click .scrollTo': 'scrollToAnchor'
    };

    Layout.prototype.scrollToAnchor = function(event) {
      var scrollTo;
      scrollTo = $(event.currentTarget).attr('data-scroll-to');
      return $('html, body').animate({
        scrollTop: $(scrollTo).offset().top
      }, 1000);
    };

    Layout.prototype.preInitialize = function() {
      return this.setElement($('#rkContainer'));
    };

    Layout.prototype.postRender = function() {
      var selector;
      return selector = '.fake-screen';
    };

    return Layout;

  })(RealKick.View.Base);

}).call(this);
