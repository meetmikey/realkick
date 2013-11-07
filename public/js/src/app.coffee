window.RealKick =
  Constants: {}
  Model: {}
  Collection: {}
  Decorator: {}
  Helper: {}
  Router: {}
  View:
    MainLayout: {}
    Static: {}

  getUserShortId: ->
    userShortId = RealKick.Helper.LocalStore.get 'userShortId'
    if not userShortId
      userShortId = RealKick.Constants.defaultUserShortId
      RealKick.Helper.LocalStore.set 'userShortId', userShortId
    userShortId

  initializeGlobalUser: ->
    RealKick.globalUser = new RealKick.Model.User
      shortId: RealKick.getUserShortId()
    RealKick.globalUser.fetch()

  init: ->
    RealKick.initializeGlobalUser()
    RealKick.Router.router = new RealKick.Router.Main()
    Backbone.history.start()

$(document).ready ->
  RealKick.init()