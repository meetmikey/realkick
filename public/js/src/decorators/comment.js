(function() {
  var CommentDecorator,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  CommentDecorator = (function() {

    function CommentDecorator() {
      this.decorate = __bind(this.decorate, this);
    }

    CommentDecorator.prototype.decorate = function(model) {
      var object;
      object = {};
      if (!model) {
        return object;
      }
      object.text = model.get('text');
      object.userImageURL = model.get('userImageURL');
      return object;
    };

    return CommentDecorator;

  })();

  RealKick.Decorator.Comment = new CommentDecorator();

}).call(this);
