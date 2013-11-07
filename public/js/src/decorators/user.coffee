class UserDecorator

  decorate: (model) =>
    object = {}
    if not model
      return object

    object.shortId = model.get 'shortId'
    object.email = model.get 'email'
    object.imageURL = model.get 'imageURL'
    object.owner1 = model.get 'owner1'
    object.owner2 = model.get 'owner2'
    object.commutes = model.get 'commutes'
    object.yelpTerms = model.get 'yelpTerms'

    object


RealKick.Decorator.User = new UserDecorator()