(function() {
  var ListingDecorator,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  ListingDecorator = (function() {

    function ListingDecorator() {
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
      return object;
    };

    return ListingDecorator;

  })();

  RealKick.Decorator.Listing = new ListingDecorator();

}).call(this);
