class RealKick.Model.Base extends Backbone.Model

  decorate: =>
    if @decorator
      return @decorator.decorate this
    return {}

  fetch: (options) =>
    options = options || {}
    options.data = options.data || {}
    RealKick.Helper.LocalStore.set 'userShortId', 1
    options.data.userShortId = RealKick.Helper.LocalStore.get 'userShortId'
    super options