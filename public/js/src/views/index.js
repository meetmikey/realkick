(function() {
  var template,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  template = "\n<div class=\"fake-phone\">\n  <div class=\"fake-screen\">\n  	<div class=\"header\">\n		<img class=\"ios-header\" src=\"img/ios-top.png\" style=\"width:316px;\">\n		<div class=\"text\">\n			700 West E Street\n		</div>\n	 </div>\n  	<div class=\"container\">\n\n	  	\n	  	<div id=\"listing-carousel\" class=\"carousel slide\">\n	  		\n		  <!-- Indicators -->\n		  <!-- <ol class=\"carousel-indicators\">\n		    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n		    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n		    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n		  </ol> -->\n\n		  <!-- Wrapper for slides -->\n		  <div class=\"carousel-inner\">\n		    <div class=\"item active\">\n		      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_101_81.jpg\">\n		    </div>\n		    <div class=\"item\">\n		      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_A01_81.jpg\">\n		    </div>\n		    <div class=\"item\">\n		      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_B01_81.jpg\">\n		    </div>\n		    <div class=\"item\">\n		      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_C01_81.jpg\">\n		    </div>\n		    <div class=\"item\">\n		      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_D01_81.jpg\">\n		    </div>\n		    <div class=\"item\">\n		      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_G01_81.jpg\">\n		    </div>\n		  </div>\n\n		  <!-- Controls -->\n		  <a class=\"left carousel-control\" href=\"#listing-carousel\" data-slide=\"prev\">\n		     <!-- <span class=\"glyphicon glyphicon-chevron-left\"></span> -->\n		  </a>\n		  <a class=\"right carousel-control\" href=\"#listing-carousel\" data-slide=\"next\">\n		    <!-- <span class=\"glyphicon glyphicon-chevron-right\"></span> -->\n		  </a>\n		</div>\n		<table class=\"essential-data\">\n	  		<tr>\n	  			<td>\n	  				$3,496,000\n	  			</td>\n	  			<td>\n	  				4 <small>BD</small>\n	  			</td>\n	  			<td>\n	  				5 <small>BA</small>\n	  			</td>\n	  			<td>\n	  				590 <small>SQFT</small> \n	  			</td>\n	  		</tr>\n	  	</table>\n	  	<div class=\"commute clearfix\">\n	  		<div class=\"icon bike\">\n	  		</div>\n	  		<div class=\"time\">\n	  			15 minutes to YourCompany\n	  		</div>\n	  	</div>\n	  	<div class=\"commute clearfix\">\n	  		<div class=\"icon check\">\n	  		</div>\n	  		<div class=\"time\">\n	  			2 car garage\n	  		</div>\n	  	</div>\n	  	<div class=\"commute clearfix\">\n	  		<div class=\"icon check\">\n	  		</div>\n	  		<div class=\"time\">\n	  			Trader Joe's nearby\n	  		</div>\n	  	</div>\n	  	<div class=\"commute clearfix\">\n	  		<div class=\"icon check\">\n	  		</div>\n	  		<div class=\"time\">\n	  			Fire place\n	  		</div>\n	  	</div>\n\n\n  </div>\n</div>\n<script>\n$('#listing-carousel').carousel({\n  interval: 3000\n})\n</script>";

  RealKick.View.Index = (function(_super) {

    __extends(Index, _super);

    function Index() {
      Index.__super__.constructor.apply(this, arguments);
    }

    Index.prototype.templateHTML = template;

    return Index;

  })(RealKick.View.Base);

}).call(this);
