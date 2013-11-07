class RealKick.Router.Main extends Backbone.Router
  routes:
    '': 'index'

  initialize: =>

  index: =>
    @render 'Index'

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