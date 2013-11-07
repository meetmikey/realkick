class RealKick.View.Base extends Backbone.View

  #---------------------------------
  #PUBLIC (and overide-able)
  #these methods only use names and definitions (vs. the private ones that use the actual subview objects etc.)
  #-------------------------------------

  events: {}
  outsideDOMScope: false
  subViewDefinitions: {} #e.g...
  #  'mySubView':
  #     viewClassName: 'SomeSubView'    #== RealKick.View.SomeSubView
  #     selector: '.mySelector'

  #Optional: If not set, it will use the corresponding template file based on the class name.
  templateHTML: ''

  bailPath: null

  #public, but don't overide these ones...
  initialize: (data) =>
    #there's probably a one-liner way to do this data assignment.  Cody would know it.
    data = data || {}
    _.each data, (value, key) =>
      @[key] = value
    @preInitialize()
    @_initializeSubviews()
    @postInitialize()
    this

  getSubViews: =>
    @_subViews

  getSubView: (name) =>
    @_subViews[name]

  getParentView: =>
    @_parentView

  getSelector: =>
    @_selector

  setSelector: (selector) =>
    @_selector = selector

  render: =>
    @preRender()
    @renderTemplate()
    @renderSubViews()
    @postRender()
    this

  renderTemplate: =>
    @$el.html @getRenderedTemplate()

  addSubView: (name, subViewDefinition, subViewData) =>
    fullViewClassName = 'RealKick.View.' + subViewDefinition.viewClassName
    subViewClass = RealKick.Helper.Utils.getClassFromName fullViewClassName
    subViewData = subViewData || {}
    subViewData._selector = subViewDefinition.selector
    subViewData._parentView = this
    subViewData._classNameSuffix = subViewDefinition.viewClassName
    subViewData._outsideDOMScope = subViewDefinition.outsideDOMScope if subViewDefinition.outsideDOMScope != undefined
    subViewData._shouldRender = subViewDefinition.shouldRender if subViewDefinition.shouldRender != undefined
    subView = new subViewClass subViewData
    @_subViews[name] = subView
    @_assignSubviewElement subView
    subView

  renderSubViews: (forceRender) =>
    _.each @_subViews, (subView) =>
      if subView and ( forceRender or subView._shouldRender )
        @_renderSubView subView 

  renderSubView: (name) =>
    @_renderSubView @getSubView(name)

  #convenience method
  addAndRenderSubview: (name, subViewDefinition, subViewData) =>
    @addSubView name, subViewDefinition, subViewData
    @renderSubView name

  teardownSubViews: =>
    _.each @_subViews, (subViewDefinition, name) =>
      @teardownSubView name

  teardownSubView: (name) =>
    subView = @getSubView(name)
    unless subView
      return
    subView._teardown()
    delete @_subViews[name]

  reloadSubViews: =>
    @teardownSubViews()
    _.each @getSubViewDefinitions(), (subViewDefinition, name) =>
      @addAndRenderSubview name, subViewDefinition

  reloadSubView: (name) =>
    @teardownSubView name
    definitions = @getSubViewDefinitions()
    subViewDefinition = definitions[name]
    unless subViewDefinition
      return
    @addAndRenderSubview name, subViewDefinition

  getRenderedTemplate: =>
    template = @getTemplate()
    templateData = @getTemplateData()
    renderedTemplate = template( templateData )
    renderedTemplate

  # Something's wrong, get out of here.
  # Note: should only be called around render time (not around intialization).
  #   Otherwise the current view will still be rendered.
  bail: =>
    bailPath = @bailPath || @_defaultBailPath
    RealKick.Router.MainRouter.navigate bailPath, {trigger:true}


  #overide-able...
  preInitialize: =>
  postInitialize: =>
  preRender: =>
  postRender: =>
  teardown: =>
  getSubViewDefinitions: =>
    @subViewDefinitions
  getTemplate: =>
    Handlebars.compile(@templateHTML)
  getTemplateData: =>
    {}



  #---------------------------------
  #PRIVATE
  #---------------------------------

  #private vars
  _selector: null
  _subViews: {}
  _parentView: null
  _classSuffix: ''
  _defaultBailPath: 'home'
  _shouldRender: true

  #un-callable (private) methods
  _initializeSubviews: =>
    # cloning object because otherwise @subView objects are shared
    # between all instances of views
    @_subViews = $.extend true, {}, @_subViews
    _.each @getSubViewDefinitions(), @_addSubViewDefinitionAndName

  #I like the arguments in the other order for public @addSubView()
  _addSubViewDefinitionAndName: (subViewDefinition, name) =>
    unless subViewDefinition and name
      return
    @addSubView name, subViewDefinition

  _teardown: =>
    @teardownSubViews()
    @teardown()
    @off()
    @undelegateEvents()
    @stopListening()
    @$el.empty()

  _renderSubView: (subView) =>
    unless subView
      return
    @_assignSubviewElement subView
    subView.render()

  _assignSubviewElement: (subView) =>
    unless subView
      return
    selector = subView.getSelector()
    if subView._outsideDOMScope
      element = $ selector
    else
      element = @$ selector
    subView.setElement element

  renderTemplate: =>
    @$el.html @getRenderedTemplate()

  _getTemplatePathFromName: (templateName) =>
    fullName = 'backbone.templates.' + templateName
    pieces = fullName.split '.'
    newPieces = []
    _.each pieces, (piece) =>
      newPieces.push( piece.charAt(0).toLowerCase() + piece.slice(1) )
    path = newPieces.join '/'
    path