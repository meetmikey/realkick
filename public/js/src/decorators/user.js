(function() {
  var UserDecorator,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  UserDecorator = (function() {

    function UserDecorator() {
      this.decorate = __bind(this.decorate, this);
    }

    UserDecorator.prototype.decorate = function(model) {
      var object;
      object = {};
      if (!model) {
        return object;
      }
      object.shortId = model.get('shortId');
      object.email = model.get('email');
      object.imageURL = model.get('imageURL');
      object.owner1 = model.get('owner1');
      object.owner2 = model.get('owner2');
      object.commutes = model.get('commutes');
      object.yelpTerms = model.get('yelpTerms');
      return object;
    };

    return UserDecorator;

  })();

  RealKick.Decorator.User = new UserDecorator();

}).call(this);
