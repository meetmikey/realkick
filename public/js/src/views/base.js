(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  RealKick.View.Base = (function(_super) {

    __extends(Base, _super);

    function Base() {
      this._getTemplatePathFromName = __bind(this._getTemplatePathFromName, this);
      this.renderTemplate = __bind(this.renderTemplate, this);
      this._assignSubviewElement = __bind(this._assignSubviewElement, this);
      this._renderSubView = __bind(this._renderSubView, this);
      this._teardown = __bind(this._teardown, this);
      this._addSubViewDefinitionAndName = __bind(this._addSubViewDefinitionAndName, this);
      this._initializeSubviews = __bind(this._initializeSubviews, this);
      this.getTemplateData = __bind(this.getTemplateData, this);
      this.getTemplate = __bind(this.getTemplate, this);
      this.getSubViewDefinitions = __bind(this.getSubViewDefinitions, this);
      this.teardown = __bind(this.teardown, this);
      this.postRender = __bind(this.postRender, this);
      this.preRender = __bind(this.preRender, this);
      this.postInitialize = __bind(this.postInitialize, this);
      this.preInitialize = __bind(this.preInitialize, this);
      this.bail = __bind(this.bail, this);
      this.getRenderedTemplate = __bind(this.getRenderedTemplate, this);
      this.reloadSubView = __bind(this.reloadSubView, this);
      this.reloadSubViews = __bind(this.reloadSubViews, this);
      this.teardownSubView = __bind(this.teardownSubView, this);
      this.teardownSubViews = __bind(this.teardownSubViews, this);
      this.addAndRenderSubview = __bind(this.addAndRenderSubview, this);
      this.renderSubView = __bind(this.renderSubView, this);
      this.renderSubViews = __bind(this.renderSubViews, this);
      this.addSubView = __bind(this.addSubView, this);
      this.renderTemplate = __bind(this.renderTemplate, this);
      this.render = __bind(this.render, this);
      this.setSelector = __bind(this.setSelector, this);
      this.getSelector = __bind(this.getSelector, this);
      this.getParentView = __bind(this.getParentView, this);
      this.getSubView = __bind(this.getSubView, this);
      this.getSubViews = __bind(this.getSubViews, this);
      this.initialize = __bind(this.initialize, this);
      Base.__super__.constructor.apply(this, arguments);
    }

    Base.prototype.events = {};

    Base.prototype.outsideDOMScope = false;

    Base.prototype.subViewDefinitions = {};

    Base.prototype.templateHTML = '';

    Base.prototype.bailPath = null;

    Base.prototype.initialize = function(data) {
      var _this = this;
      data = data || {};
      _.each(data, function(value, key) {
        return _this[key] = value;
      });
      this.preInitialize();
      this._initializeSubviews();
      this.postInitialize();
      return this;
    };

    Base.prototype.getSubViews = function() {
      return this._subViews;
    };

    Base.prototype.getSubView = function(name) {
      return this._subViews[name];
    };

    Base.prototype.getParentView = function() {
      return this._parentView;
    };

    Base.prototype.getSelector = function() {
      return this._selector;
    };

    Base.prototype.setSelector = function(selector) {
      return this._selector = selector;
    };

    Base.prototype.render = function() {
      this.preRender();
      this.renderTemplate();
      this.renderSubViews();
      this.postRender();
      return this;
    };

    Base.prototype.renderTemplate = function() {
      return this.$el.html(this.getRenderedTemplate());
    };

    Base.prototype.addSubView = function(name, subViewDefinition, subViewData) {
      var fullViewClassName, subView, subViewClass;
      fullViewClassName = 'RealKick.View.' + subViewDefinition.viewClassName;
      subViewClass = RealKick.Helper.Utils.getClassFromName(fullViewClassName);
      subViewData = subViewData || {};
      subViewData._selector = subViewDefinition.selector;
      subViewData._parentView = this;
      subViewData._classNameSuffix = subViewDefinition.viewClassName;
      if (subViewDefinition.outsideDOMScope !== void 0) {
        subViewData._outsideDOMScope = subViewDefinition.outsideDOMScope;
      }
      if (subViewDefinition.shouldRender !== void 0) {
        subViewData._shouldRender = subViewDefinition.shouldRender;
      }
      subView = new subViewClass(subViewData);
      this._subViews[name] = subView;
      this._assignSubviewElement(subView);
      return subView;
    };

    Base.prototype.renderSubViews = function(forceRender) {
      var _this = this;
      return _.each(this._subViews, function(subView) {
        if (subView && (forceRender || subView._shouldRender)) {
          return _this._renderSubView(subView);
        }
      });
    };

    Base.prototype.renderSubView = function(name) {
      return this._renderSubView(this.getSubView(name));
    };

    Base.prototype.addAndRenderSubview = function(name, subViewDefinition, subViewData) {
      this.addSubView(name, subViewDefinition, subViewData);
      return this.renderSubView(name);
    };

    Base.prototype.teardownSubViews = function() {
      var _this = this;
      return _.each(this._subViews, function(subViewDefinition, name) {
        return _this.teardownSubView(name);
      });
    };

    Base.prototype.teardownSubView = function(name) {
      var subView;
      subView = this.getSubView(name);
      if (!subView) {
        return;
      }
      subView._teardown();
      return delete this._subViews[name];
    };

    Base.prototype.reloadSubViews = function() {
      var _this = this;
      this.teardownSubViews();
      return _.each(this.getSubViewDefinitions(), function(subViewDefinition, name) {
        return _this.addAndRenderSubview(name, subViewDefinition);
      });
    };

    Base.prototype.reloadSubView = function(name) {
      var definitions, subViewDefinition;
      this.teardownSubView(name);
      definitions = this.getSubViewDefinitions();
      subViewDefinition = definitions[name];
      if (!subViewDefinition) {
        return;
      }
      return this.addAndRenderSubview(name, subViewDefinition);
    };

    Base.prototype.getRenderedTemplate = function() {
      var renderedTemplate, template, templateData;
      template = this.getTemplate();
      templateData = this.getTemplateData();
      renderedTemplate = template(templateData);
      return renderedTemplate;
    };

    Base.prototype.bail = function() {
      var bailPath;
      bailPath = this.bailPath || this._defaultBailPath;
      return RealKick.Router.MainRouter.navigate(bailPath, {
        trigger: true
      });
    };

    Base.prototype.preInitialize = function() {};

    Base.prototype.postInitialize = function() {};

    Base.prototype.preRender = function() {};

    Base.prototype.postRender = function() {};

    Base.prototype.teardown = function() {};

    Base.prototype.getSubViewDefinitions = function() {
      return this.subViewDefinitions;
    };

    Base.prototype.getTemplate = function() {
      return Handlebars.compile(this.templateHTML);
    };

    Base.prototype.getTemplateData = function() {
      return {};
    };

    Base.prototype._selector = null;

    Base.prototype._subViews = {};

    Base.prototype._parentView = null;

    Base.prototype._classSuffix = '';

    Base.prototype._defaultBailPath = 'home';

    Base.prototype._shouldRender = true;

    Base.prototype._initializeSubviews = function() {
      this._subViews = $.extend(true, {}, this._subViews);
      return _.each(this.getSubViewDefinitions(), this._addSubViewDefinitionAndName);
    };

    Base.prototype._addSubViewDefinitionAndName = function(subViewDefinition, name) {
      if (!(subViewDefinition && name)) {
        return;
      }
      return this.addSubView(name, subViewDefinition);
    };

    Base.prototype._teardown = function() {
      this.teardownSubViews();
      this.teardown();
      this.off();
      this.undelegateEvents();
      this.stopListening();
      return this.$el.empty();
    };

    Base.prototype._renderSubView = function(subView) {
      if (!subView) {
        return;
      }
      this._assignSubviewElement(subView);
      return subView.render();
    };

    Base.prototype._assignSubviewElement = function(subView) {
      var element, selector;
      if (!subView) {
        return;
      }
      selector = subView.getSelector();
      if (subView._outsideDOMScope) {
        element = $(selector);
      } else {
        element = this.$(selector);
      }
      return subView.setElement(element);
    };

    Base.prototype.renderTemplate = function() {
      return this.$el.html(this.getRenderedTemplate());
    };

    Base.prototype._getTemplatePathFromName = function(templateName) {
      var fullName, newPieces, path, pieces,
        _this = this;
      fullName = 'backbone.templates.' + templateName;
      pieces = fullName.split('.');
      newPieces = [];
      _.each(pieces, function(piece) {
        return newPieces.push(piece.charAt(0).toLowerCase() + piece.slice(1));
      });
      path = newPieces.join('/');
      return path;
    };

    return Base;

  })(Backbone.View);

}).call(this);
