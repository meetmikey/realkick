(function() {
  var ListingDecorator,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  ListingDecorator = (function() {

    function ListingDecorator() {
      this.getNumberOfBaths = __bind(this.getNumberOfBaths, this);
      this.decorate = __bind(this.decorate, this);
    }

    ListingDecorator.prototype.decorate = function(model) {
      var object;
      object = {};
      if (!model) {
        return object;
      }
      object.photos = model.get('Photos');
      object.address = model.get('Address');
      object.internetListing = model.get('InternetListing');
      object.listingPrice = model.get('ListingPrice');
      object.numBedrooms = model.get('NumberOfBedrooms');
      object.numBathrooms = this.getNumberOfBaths(model);
      object.squareFeet = model.get('SquareFootage');
      object.listingDate = model.get('ListingDate');
      object.hasGarageParking = model.get('NumberOfGarageSpaces') ? true : false;
      object.yearBuilt = model.get('YearHomeBuilt');
      object.publicRemarks = model.get('PublicRemarks');
      object.augmentedData = model.get('augmentedData');
      return object;
    };

    ListingDecorator.prototype.getNumberOfBaths = function(model) {
      var fullBaths, halfBaths, totalBaths;
      fullBaths = Number(model.get('NumberOfBaths'));
      halfBaths = Number(model.get('NumberOfHalfBaths'));
      if (!fullBaths) {
        fullBaths = 0;
      }
      if (!halfBaths) {
        halfBaths = 0;
      }
      totalBaths = fullBaths + (halfBaths / 2);
      return totalBaths;
    };

    return ListingDecorator;

  })();

  RealKick.Decorator.Listing = new ListingDecorator();

}).call(this);
