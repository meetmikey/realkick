class ListingDecorator

  decorate: (model) =>
    object = {}
    if not model
      return object

    object.photos = model.get 'Photos'
    object.address = model.get 'Address'

    object

RealKick.Decorator.Listing = new ListingDecorator()