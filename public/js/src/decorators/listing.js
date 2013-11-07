(function() {
  var ListingDecorator,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  ListingDecorator = (function() {

    function ListingDecorator() {
      this.getListingPrice = __bind(this.getListingPrice, this);
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
      object.listingPrice = this.getListingPrice(model);
      object.numBedrooms = model.get('NumberOfBedrooms');
      object.numBathrooms = this.getNumberOfBaths(model);
      object.squareFeet = model.get('SquareFootage');
      object.listingDate = model.get('ListingDate');
      object.hasGarageParking = model.get('NumberOfGarageSpaces') ? true : false;
      object.yearBuilt = model.get('YearHomeBuilt');
      object.publicRemarks = ((_ref = model.get('PublicRemarks')) != null ? (_ref1 = _ref.split(' ')) != null ? (_ref2 = _ref1.slice(0, 39)) != null ? _ref2.join(' ') : void 0 : void 0 : void 0) + '...';
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

    ListingDecorator.prototype.getListingPrice = function(model) {
      var length, listingPrice;
      listingPrice = model.get('ListingPrice');
      if (!listingPrice) {
        return 0;
      }
      length = listingPrice.length;
      if (length > 6) {
        listingPrice = listingPrice.substring(0, length - 6) + ',' + listingPrice.substring(length - 6, length - 3) + ',' + listingPrice.substring(length - 3);
      } else if (length > 3) {
        listingPrice = listingPrice.substring(0, length - 3) + ',' + listingPrice.substring(length - 3);
      }
      return listingPrice;
    };

    return ListingDecorator;

  })();

  RealKick.Decorator.Listing = new ListingDecorator();

}).call(this);
