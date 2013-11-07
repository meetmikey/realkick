class ListingDecorator

  decorate: (model) =>
    object = {}
    if not model
      return object

    object.photos = model.get 'Photos'
    object.address = model.get 'Address'
    object.internetListing = model.get 'InternetListing'
    object.listingPrice = @getListingPrice model
    object.numBedrooms = model.get 'NumberOfBedrooms'
    object.numBathrooms = @getNumberOfBaths model
    object.squareFeet = model.get 'SquareFootage'
    object.listingDate = model.get 'ListingDate'
    object.hasGarageParking = if model.get('NumberOfGarageSpaces') then true else false
    object.yearBuilt = model.get 'YearHomeBuilt'
    object.publicRemarks = model.get('PublicRemarks')?.split(' ')?.slice(0, 39)?.join(' ') + '...'
    object.augmentedData = model.get 'augmentedData'
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

  getListingPrice: (model) =>
    listingPrice = model.get 'ListingPrice'
    if not listingPrice
      return 0
    length = listingPrice.length
    if length > 6
      listingPrice = listingPrice.substring( 0, length-6 ) + ',' + listingPrice.substring(length-6, length-3) + ',' + listingPrice.substring(length-3)
    else if length > 3
      listingPrice = listingPrice.substring( 0, length-3 ) + ',' + listingPrice.substring(length-3)
    listingPrice

RealKick.Decorator.Listing = new ListingDecorator()