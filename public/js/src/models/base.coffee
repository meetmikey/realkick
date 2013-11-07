class RealKick.Model.Base extends Backbone.Model

  decorate: =>
    if @decorator
      return @decorator.decorate this
    return {}

  fetch: (options) =>
    options = options || {}
    options.data = options.data || {}
    options.data.userShortId = RealKick.globalUser.get 'shortId'
    super options