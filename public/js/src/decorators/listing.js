(function() {
  var ListingDecorator,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  ListingDecorator = (function() {

    function ListingDecorator() {
      this.getNumberOfBaths = __bind(this.getNumberOfBaths, this);
      this.decorate = __bind(this.decorate, this);
    }

    ListingDecorator.prototype.decorate = function(model) {
      var object, _ref, _ref1, _ref2;
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
      object.publicRemarks = ((_ref = model.get('PublicRemarks')) != null ? (_ref1 = _ref.split(' ')) != null ? (_ref2 = _ref1.slice(0, 39)) != null ? _ref2.join(' ') : void 0 : void 0 : void 0) + '...';
      object.augmentedData = model.get('augmentedData');
      console.log(object);
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
