class RealKick.Router.Main extends Backbone.Router
  routes:
    'home': 'index'
    '': 'index'
    'listing/:listingId': 'listing'
    'a': 'staticA'
    'b': 'staticB'
    'c': 'staticC'
    'd': 'staticD'
    'e': 'staticE'
    'f': 'staticF'
    'g': 'staticG'
    'h': 'staticH'
    'i': 'staticI'
    'j': 'staticJ'

  initialize: =>

  index: =>
    @render 'Index',
      listingId: '1'

  listing: (listingId) =>
    @render 'Listing',
      listingId: listingId

  staticA: =>
    @render 'Static.A'
  staticB: =>
    @render 'Static.B'
  staticC: =>
    @render 'Static.C'
  staticD: =>
    @render 'Static.D'
  staticE: =>
    @render 'Static.E'
  staticF: =>
    @render 'Static.F'
  staticG: =>
    @render 'Static.G'
  staticH: =>
    @render 'Static.H'
  staticI: =>
    @render 'Static.I'
  staticJ: =>
    @render 'Static.J'

  renderLayout: =>
    unless @_layout
      @_layout = new RealKick.View.MainLayout.Layout()
      @_layout.render()
    @_layout.reloadSubView 'header'
    @_layout.reloadSubView 'footer'

  scrollToTop: =>
    $('html, body').animate({ scrollTop: 0 }, 'slow')

  render: (viewClassName, data) =>
    @renderLayout()
    @_layout.teardownSubView 'rkContent'
    @_layout.addAndRenderSubview 'rkContent', {
        viewClassName: viewClassName
        selector: '#rkContent'
      }, data
    @scrollToTop()