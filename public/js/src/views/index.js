(function() {
  var template,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  template = "\n<div class=\"fake-phone\">\n  <div class=\"fake-screen\">\n  	<div class=\"header\">\n		<img class=\"ios-header\" src=\"img/ios-top.png\" style=\"width:316px;\">\n		<div class=\"text\">\n			{{internetListing}}\n		</div>\n	 </div>\n  	<div class=\"container\">\n\n	  	\n	  	<div id=\"listing-carousel\" class=\"carousel slide\">\n	  	\n		  <!-- Wrapper for slides -->\n		  <div class=\"carousel-inner\">\n		    <div class=\"item active\">\n		      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_101_81.jpg\">\n		    </div>\n		    <div class=\"item\">\n		      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_A01_81.jpg\">\n		    </div>\n		    <div class=\"item\">\n		      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_B01_81.jpg\">\n		    </div>\n		    <div class=\"item\">\n		      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_C01_81.jpg\">\n		    </div>\n		    <div class=\"item\">\n		      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_D01_81.jpg\">\n		    </div>\n		    <div class=\"item\">\n		      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_G01_81.jpg\">\n		    </div>\n		  </div>\n\n		  <!-- Controls -->\n		  <a class=\"left carousel-control\" href=\"#listing-carousel\" data-slide=\"prev\">\n		     <!-- <span class=\"glyphicon glyphicon-chevron-left\"></span> -->\n		  </a>\n		  <a class=\"right carousel-control\" href=\"#listing-carousel\" data-slide=\"next\">\n		    <!-- <span class=\"glyphicon glyphicon-chevron-right\"></span> -->\n		  </a>\n		</div>\n		<table class=\"essential-data\">\n	  		<tr>\n	  			<td>\n	  				${{listingPrice}}\n	  			</td>\n	  			<td>\n	  				{{numBedrooms}} <small>BD</small>\n	  			</td>\n	  			<td>\n	  				{{numBathrooms}} <small>BA</small>\n	  			</td>\n	  			<td>\n	  				{{squareFeet}} <small>SQFT</small> \n	  			</td>\n	  		</tr>\n	  	</table>\n\n  		{{#each augmentedData.googleMaps}}\n		  	<div class=\"commute clearfix\">\n		  		<div class=\"icon {{mode}}\">\n		  		</div>\n		  		<div class=\"time\">\n		  			{{this.data.duration.text}} to {{this.name}}\n		  		</div>\n	  	</div>\n  		{{/each}}\n\n	  	<div class=\"commute clearfix\">\n	  		<div class=\"icon check\">\n	  		</div>\n	  		<div class=\"time\">\n	  			Garage Parking\n	  		</div>\n	  	</div>\n	  	<div class=\"commute clearfix\">\n	  		<div class=\"icon check\">\n	  		</div>\n	  		<div class=\"time\">\n	  			Balcony\n	  		</div>\n	  	</div>\n	  	<div class=\"commute clearfix\">\n	  		<div class=\"icon check\">\n	  		</div>\n	  		<div class=\"time\">\n	  			Swimming Pool\n	  		</div>\n	  	</div>\n	 	<div class=\"scores\">\n			<table>\n				<tr>\n					<td>\n						<div class=\"score\">\n							{{augmentedData.walkScore.walkscore}}\n						</div>\n						<div class=\"label\">\n							walking\n						</div>\n					</td>\n					<td>\n						<div class=\"score\">\n							93\n						</div>\n						<div class=\"label\">\n							safety\n						</div>\n					</td>\n					<td>\n						<div class=\"score\">\n							85\n						</div>\n						<div class=\"label\">\n							transit\n						</div>\n					</td>\n					<td>\n						<div class=\"score\">\n							40\n						</div>\n						<div class=\"label\">\n							schools\n						</div>\n					</td>\n				</tr>\n			</table>\n		</div>\n		<div class=\"public-remarks\">\n			{{publicRemarks}}\n		</div>\n		<h1> Your Spots Nearby </h1>\n		<div>\n			{{#each augmentedData.yelp}}\n				<div class=\"yelp\">\n					<b> {{term}} </b>\n					{{#each data.businesses}}\n						<img src={{image_url}} />\n						<a href=\"{{mobile_url}}\"> {{name}} </a>\n						rating: {{rating}}\n					{{/each}}\n				</div>\n			{{/each}}\n		</div>\n	</div>\n  </div>\n</div>\n<script>\n$('#listing-carousel').carousel({\n  interval: 3000\n})\n</script>";

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
