(function() {
  var template,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  template = "\n<div class=\"fake-phone\">\n  <div class=\"fake-screen\">\n\n          <div class=\"header clearfix\">\n                <div class=\"ios-header clearfix\"><img src=\"img/ios-top.png\" style=\"width:316px;\"></div>\n                                <div class=\"header-nav clearfix\">\n                                        <div class=\"header-button pull-left\">\n                                                <div class=\"glyphicon glyphicon-align-justify\"></div>\n                                        </div>\n                                        <div class=\"text\">\n                                                        {{internetListing}}\n                                        </div>\n                                        <div class=\"header-button pull-right\">\n                                                <div style=\"font-size: 20px; line-height: 20px;\" class=\"glyphicon glyphicon-cog\"></div>\n                                        </div>\n                                </div>\n                         </div>\n          <div class=\"container\">\n\n                  \n                  <div id=\"listing-carousel\" class=\"carousel slide\">\n                  \n                  <!-- Wrapper for slides -->\n                  <div class=\"carousel-inner\">\n                    <div class=\"item active\">\n                      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_101_81.jpg\">\n                    </div>\n                    <div class=\"item\">\n                      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_A01_81.jpg\">\n                    </div>\n                    <div class=\"item\">\n                      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_B01_81.jpg\">\n                    </div>\n                    <div class=\"item\">\n                      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_C01_81.jpg\">\n                    </div>\n                    <div class=\"item\">\n                      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_D01_81.jpg\">\n                    </div>\n                    <div class=\"item\">\n                      <img src=\"http://tempo5.sandicor.com/SNDImages/54/130027318_G01_81.jpg\">\n                    </div>\n                  </div>\n\n                  <!-- Controls -->\n                  <a class=\"left carousel-control\" href=\"#listing-carousel\" data-slide=\"prev\">\n                     <!-- <span class=\"glyphicon glyphicon-chevron-left\"></span> -->\n                  </a>\n                  <a class=\"right carousel-control\" href=\"#listing-carousel\" data-slide=\"next\">\n                    <!-- <span class=\"glyphicon glyphicon-chevron-right\"></span> -->\n                  </a>\n                </div>\n                <table class=\"essential-data\">\n                          <tr>\n                                  <td>\n                                          ${{listingPrice}}\n                                  </td>\n                                  <td>\n                                          {{numBedrooms}} <small>BD</small>\n                                  </td>\n                                  <td>\n                                          {{numBathrooms}} <small>BA</small>\n                                  </td>\n                                  <td>\n                                          {{squareFeet}} <small>SQFT</small> \n                                  </td>\n                          </tr>\n                  </table>\n\n                  {{#each augmentedData.googleMaps}}\n                          <div class=\"commute clearfix\">\n                                  <div class=\"icon {{mode}}\">\n                                  </div>\n                                  <div class=\"time\">\n                                          {{this.data.duration.text}} to {{this.name}}\n                                  </div>\n                  </div>\n                  {{/each}}\n\n	  	<div class=\"commute clearfix\">\n	  		<div class=\"icon check\">\n	  		</div>\n	  		<div class=\"time\">\n	  			Garage Parking\n	  		</div>\n	  	</div>\n	  	<div class=\"commute clearfix\">\n	  		<div class=\"icon check\">\n	  		</div>\n	  		<div class=\"time\">\n	  			Balcony\n	  		</div>\n	  	</div>\n	  	<div class=\"commute clearfix\">\n	  		<div class=\"icon check\">\n	  		</div>\n	  		<div class=\"time\">\n	  			Swimming Pool\n	  		</div>\n	  	</div>\n	 	<div class=\"scores\">\n			<table>\n				<tr>\n					<td>\n						<div class=\"score\">\n							{{augmentedData.walkScore.walkscore}}\n						</div>\n						<div class=\"score-label\">\n							walking\n						</div>\n					</td>\n					<td>\n						<div class=\"score\">\n							93\n						</div>\n						<div class=\"score-label\">\n							safety\n						</div>\n					</td>\n					<td>\n						<div class=\"score\">\n							85\n						</div>\n						<div class=\"score-label\">\n							transit\n						</div>\n					</td>\n					<td>\n						<div class=\"score\">\n							40\n						</div>\n						<div class=\"score-label\">\n							schools\n						</div>\n					</td>\n				</tr>\n			</table>\n		</div>\n		<div class=\"public-remarks\" style=\"padding-bottom: 60px;\">\n			<!-- {{publicRemarks}} -->\n		\n			<div class=\"inline-header\">Neighborhood intelligence</div>\n			<div>\n				{{#each augmentedData.yelp}}\n					<div class=\"yelp\">\n						<div class=\"interest\"> {{term}} </div>\n						{{#each data.businesses}}\n						<div class=\"interest-item clearfix\">\n							<div class=\"interest-image\">\n								<img src={{image_url}} />\n							</div>\n							<div class=\"interest-text\">\n								<div class=\"clearfix\">\n									<div class=\"interest-name\"><a href=\"{{mobile_url}}\"> {{name}} </a></div>\n									<div class=\"interest-rating\">{{rating}}</div>\n								</div>\n								<div class=\"excerpt\">\n									\"{{snippet_text}}\"\n								</div>\n							</div>\n						</div>\n						{{/each}}\n					</div>\n				{{/each}}\n			</div>\n		</div>\n	</div>\n	\n	<div class=\"no super-box\" id=\"noBox\">\n		<div class=\"main-box\">\n			<div class=\"reason-button\">\n				price\n			</div>\n			<div class=\"reason-button goToNextListing\">\n				neighborhood\n			</div>\n			<div class=\"reason-button goToNextListing\">\n				floorplan\n			</div>\n			<div class=\"reason-button goToNextListing\">\n				other\n			</div>\n		</div>\n	</div>\n\n	<div class=\"maybe super-box\" id=\"maybeBox\">\n		<div class=\"main-box\">\n			<div class=\"reason-button goToNextListing\">\n				save for later\n			</div>\n			<div class=\"reason-button goToNextListing\">\n				ask brian\n			</div>\n		</div>\n	</div>\n\n	<div class=\"yes super-box\" id=\"yesBox\">\n		<div class=\"main-box\">\n			<div class=\"reason-button goToNextListing\">\n				call brian\n			</div>\n			<div class=\"reason-button goToStaticA\">\n				book a viewing\n			</div>\n		</div>\n	</div>\n\n	<div class=\"footer\">\n    {{#each comments}}\n  		<div class=\"agent-comment\">\n  			<div class=\"agent\">\n  				<img src=\"{{userImageURL}}\">\n  			</div>\n  			<div class=\"comment\">\n  				{{text}}\n  			</div>\n  		</div>\n    {{/each}}\n		<table>\n			<tr>\n				<td class=\"no\" id=\"noButton\">\n					<div class=\"glyphicon glyphicon-remove\"></div>\n				</td>\n				<td class=\"maybe\" id=\"maybeButton\">\n					<div style=\"font-size:36px; line-height:36px; padding-top: 2px;\">?</div>\n				</td>\n				<td class=\"yes\" id=\"yesButton\">\n					<div class=\"glyphicon glyphicon-ok\"></div>\n				</td>\n			</tr>\n		</table>\n	</div>\n </div>\n</div>\n<script>\n$('#listing-carousel').carousel({\n  interval: 3000\n})\n</script>";

  RealKick.View.Index = (function(_super) {

    __extends(Index, _super);

    function Index() {
      this.getTemplateData = __bind(this.getTemplateData, this);
      this.postRender = __bind(this.postRender, this);
      this.fetchListing = __bind(this.fetchListing, this);
      this.goToStaticB = __bind(this.goToStaticB, this);
      this.goToNextListing = __bind(this.goToNextListing, this);
      this.showYes = __bind(this.showYes, this);
      this.showMaybe = __bind(this.showMaybe, this);
      this.showNo = __bind(this.showNo, this);
      Index.__super__.constructor.apply(this, arguments);
    }

    Index.prototype.templateHTML = template;

    Index.prototype.listing = null;

    Index.prototype.events = {
      'click #noButton': 'showNo',
      'click #maybeButton': 'showMaybe',
      'click #yesButton': 'showYes',
      'click .goToNextListing': 'goToNextListing',
      'click .goToStaticA': 'goToStaticB'
    };

    Index.prototype.showNo = function() {
      return $('#noBox').css('visibility', 'visible');
    };

    Index.prototype.showMaybe = function() {
      return $('#maybeBox').css('visibility', 'visible');
    };

    Index.prototype.showYes = function() {
      return $('#yesBox').css('visibility', 'visible');
    };

    Index.prototype.goToNextListing = function() {
      this.listingId++;
      if (this.listingId > 4) {
        this.listingId = 1;
      }
      return this.fetchListing();
    };

    Index.prototype.goToStaticB = function() {
      return RealKick.Router.router.navigate('b', {
        trigger: true
      });
    };

    Index.prototype.fetchListing = function() {
      var _this = this;
      this.listing = new RealKick.Model.Listing({
        id: this.listingId
      });
      this.commentsCollection = new RealKick.Collection.Comment;
      return this.listing.fetch({
        success: function() {
          _this.commentsCollection.reset(_this.listing.get('comments'));
          return _this.renderTemplate();
        },
        error: function() {
          return console.log('failed to get listing: ', _this.listing);
        }
      });
    };

    Index.prototype.postRender = function() {
      return this.fetchListing();
    };

    Index.prototype.getTemplateData = function() {
      var data;
      data = {};
      if (this.listing) {
        data = this.listing.decorate();
        data.comments = _.invoke(this.commentsCollection.models, 'decorate');
      }
      return data;
    };

    return Index;

  })(RealKick.View.Base);

}).call(this);
