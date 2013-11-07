(function() {
  var template,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  template = "<a href=\"#b\">\n	<div class=\"fake-phone\">\n	  <div class=\"fake-screen disable\">\n		<img style=\"width:100%;\" src=\"img/agent-alert.png\"       \n	 </div>\n	</div>\n</a>\n";

  RealKick.View.Static.B = (function(_super) {

    __extends(B, _super);

    function B() {
      B.__super__.constructor.apply(this, arguments);
    }

    B.prototype.templateHTML = template;

    return B;

  })(RealKick.View.Base);

}).call(this);
