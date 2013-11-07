(function() {
  var template,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  template = "\n<div class=\"fake-phone\">\n  <div class=\"fake-screen\">\n  	<div class=\"header\">\n		<img class=\"ios-header\" src=\"img/ios-top.png\" style=\"width:316px;\">\n		<div class=\"text\">\n			{{address}}\n		</div>\n	 </div>\n  	<div class=\"container\">\n\n	  	\n	  	<div id=\"listing-carousel\" class=\"carousel slide\">\n	  		\n		  <!-- Indicators -->\n		  <!-- <ol class=\"carousel-indicators\">\n		    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n		    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n		    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n		  </ol> -->\n\n		  <!-- Wrapper for slides -->\n		  <div class=\"carousel-inner\">\n		    <div class=\"item active\">\n		      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_101_81.jpg\">\n		    </div>\n		    <div class=\"item\">\n		      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_A01_81.jpg\">\n		    </div>\n		    <div class=\"item\">\n		      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_B01_81.jpg\">\n		    </div>\n		    <div class=\"item\">\n		      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_C01_81.jpg\">\n		    </div>\n		    <div class=\"item\">\n		      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_D01_81.jpg\">\n		    </div>\n		    <div class=\"item\">\n		      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_G01_81.jpg\">\n		    </div>\n		  </div>\n\n		  <!-- Controls -->\n		  <a class=\"left carousel-control\" href=\"#listing-carousel\" data-slide=\"prev\">\n		     <!-- <span class=\"glyphicon glyphicon-chevron-left\"></span> -->\n		  </a>\n		  <a class=\"right carousel-control\" href=\"#listing-carousel\" data-slide=\"next\">\n		    <!-- <span class=\"glyphicon glyphicon-chevron-right\"></span> -->\n		  </a>\n		</div>\n		<table class=\"essential-data\">\n	  		<tr>\n	  			<td>\n	  				$3,496,000\n	  			</td>\n	  			<td>\n	  				4 <small>BD</small>\n	  			</td>\n	  			<td>\n	  				5 <small>BA</small>\n	  			</td>\n	  			<td>\n	  				590 <small>SQFT</small> \n	  			</td>\n	  		</tr>\n	  	</table>\n	  	<div class=\"commute clearfix\">\n	  		<div class=\"icon bike\">\n	  		</div>\n	  		<div class=\"time\">\n	  			15 minutes to YourCompany\n	  		</div>\n	  	</div>\n	  	<div class=\"commute clearfix\">\n	  		<div class=\"icon check\">\n	  		</div>\n	  		<div class=\"time\">\n	  			2 car garage\n	  		</div>\n	  	</div>\n	  	<div class=\"commute clearfix\">\n	  		<div class=\"icon check\">\n	  		</div>\n	  		<div class=\"time\">\n	  			Trader Joe's nearby\n	  		</div>\n	  	</div>\n	  	<div class=\"commute clearfix\">\n	  		<div class=\"icon check\">\n	  		</div>\n	  		<div class=\"time\">\n	  			Fireplace\n	  		</div>\n	  	</div>\n	 	<div class=\"scores\">\n			<table>\n				<tr>\n					<td>\n						<div class=\"score\">\n							87\n						</div>\n						<div class=\"label\">\n							walking\n						</div>\n					</td>\n					<td>\n						<div class=\"score\">\n							93\n						</div>\n						<div class=\"label\">\n							safety\n						</div>\n					</td>\n					<td>\n						<div class=\"score\">\n							88\n						</div>\n						<div class=\"label\">\n							transit\n						</div>\n					</td>\n					<td>\n						<div class=\"score\">\n							68\n						</div>\n						<div class=\"label\">\n							schools\n						</div>\n					</td>\n				</tr>\n			</table>\n		</div>\n		<div class=\"public-remarks\">\n			\"Live in the exclusive, exquisite Electra. Open and spacious unit located on the 16th floor with panoramic views of the city. Bamboo flooring, travertine throughout both baths, private balcony with incredible views. Open Kitchen with granite counters, Bosh and Thermador appliances.  Featured amenities include: sauna, steam room, fitness center, outdoor seating, pool, spa, BBQ area and concierge services.\"\n		</div>\n	</div>\n  </div>\n</div>\n<script>\n$('#listing-carousel').carousel({\n  interval: 3000\n})\n</script>";

  RealKick.View.Index = (function(_super) {

    __extends(Index, _super);

    function Index() {
      this.getTemplateData = __bind(this.getTemplateData, this);
      this.postRender = __bind(this.postRender, this);
      this.postInitialize = __bind(this.postInitialize, this);
      Index.__super__.constructor.apply(this, arguments);
    }

    Index.prototype.templateHTML = template;

    Index.prototype.listing = null;

    Index.prototype.postInitialize = function() {
      return this.listing = new RealKick.Model.Listing({
        id: this.listingId
      });
    };

    Index.prototype.postRender = function() {
      var _this = this;
      return this.listing.fetch({
        success: function() {
          return _this.renderTemplate();
        },
        error: function() {
          return console.log('failed to get listing: ', _this.listing);
        }
      });
    };

    Index.prototype.getTemplateData = function() {
      var data;
      data = this.listing.decorate();
      return data;
    };

    return Index;

  })(RealKick.View.Base);

}).call(this);
