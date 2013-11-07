window.RealKick =
  Model: {}
  Collection: {}
  Decorator: {}
  Helper: {}
  Router: {}
  View:
    MainLayout: {}

  init: ->
    RealKick.Router.router = new RealKick.Router.Main()
    Backbone.history.start()

$(document).ready ->
  RealKick.init()