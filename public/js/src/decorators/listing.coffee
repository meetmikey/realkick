class ListingDecorator

  decorate: (model) =>
    object = {}
    if not model
      return object

    object.photos = model.get 'Photos'
    object.address = model.get 'Address'
    object.internetListing = model.get 'InternetListing'
    object.listingPrice = model.get 'ListingPrice'
    object.numBedrooms = model.get 'NumberOfBedrooms'
    object.numBathrooms = @getNumberOfBaths model
    object.squareFeet = model.get 'SquareFootage'
    object.listingDate = model.get 'ListingDate'
    object.hasGarageParking = if model.get('NumberOfGarageSpaces') then true else false
    object.yearBuilt = model.get 'YearHomeBuilt'
    object.publicRemarks = model.get('PublicRemarks')?.split(' ')?.slice(0, 39)?.join(' ') + '...'
    object.augmentedData = model.get 'augmentedData'
    console.log object
    object

  getNumberOfBaths: (model) =>
    fullBaths = Number model.get 'NumberOfBaths'
    halfBaths = Number model.get 'NumberOfHalfBaths'

    if not fullBaths
      fullBaths = 0
    if not halfBaths
      halfBaths = 0
    totalBaths = fullBaths + ( halfBaths / 2 )
    totalBaths

RealKick.Decorator.Listing = new ListingDecorator()