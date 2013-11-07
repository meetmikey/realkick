template = """

<div class="fake-phone">
  <div class="fake-screen">

          <div class="header clearfix">
                <div class="ios-header clearfix"><img src="img/ios-top.png" style="width:316px;"></div>
                                <div class="header-nav clearfix">
                                        <div class="header-button pull-left">
                                                <div class="glyphicon glyphicon-align-justify"></div>
                                        </div>
                                        <div class="text">
                                                        {{internetListing}}
                                        </div>
                                        <div class="header-button pull-right">
                                                <div style="font-size: 20px; line-height: 20px;" class="glyphicon glyphicon-cog"></div>
                                        </div>
                                </div>
                         </div>
          <div class="container">

                  
                  <div id="listing-carousel" class="carousel slide">
                  
                  <!-- Wrapper for slides -->
                  <div class="carousel-inner">
                    {{#each photos}}
                      {{#if Location}}
                        <div class="item {{#if @index}}{{else}} active{{/if}}">
                          <img src="{{Location}}">
                        </div>
                      {{/if}}
                    {{/each}}
                  </div>

                  <!-- Controls -->
                  <a class="left carousel-control" href="#listing-carousel" data-slide="prev">
                     <!-- <span class="glyphicon glyphicon-chevron-left"></span> -->
                  </a>
                  <a class="right carousel-control" href="#listing-carousel" data-slide="next">
                    <!-- <span class="glyphicon glyphicon-chevron-right"></span> -->
                  </a>
                </div>
                <table class="essential-data">
                          <tr>
                                  <td>
                                          ${{listingPrice}}
                                  </td>
                                  <td>
                                          {{numBedrooms}} <small>BD</small>
                                  </td>
                                  <td>
                                          {{numBathrooms}} <small>BA</small>
                                  </td>
                                  <td>
                                          {{squareFeet}} <small>SQFT</small> 
                                  </td>
                          </tr>
                  </table>

                  {{#each augmentedData.googleMaps}}
                          <div class="commute clearfix">
                                  <div class="icon {{mode}}">
                                  </div>
                                  <div class="time">
                                          {{this.data.duration.text}} to {{this.name}}
                                  </div>
                  </div>
                  {{/each}}

      {{#if hasGarageParking}}
  	  	<div class="commute clearfix">
  	  		<div class="icon check">
  	  		</div>
  	  		<div class="time">
  	  			Garage Parking
  	  		</div>
  	  	</div>
      {{/if}}
      
      {{#if hasFireplace}}
      <div class="commute clearfix">
        <div class="icon check">
        </div>
        <div class="time">
          Fireplace
        </div>
      </div>
      {{/if}}

      {{#if hasPool}}
	  	<div class="commute clearfix">
	  		<div class="icon check">
	  		</div>
	  		<div class="time">
	  			Swimming Pool
	  		</div>
	  	</div>
      {{/if}}
	 	<div class="scores">
			<table>
				<tr>
					<td>
						<div class="score">
							{{augmentedData.random.walkScore}}
						</div>
						<div class="score-label">
							walking
						</div>
					</td>
					<td>
						<div class="score">
							{{augmentedData.random.safetyScore}}
						</div>
						<div class="score-label">
							safety
						</div>
					</td>
					<td>
						<div class="score">
							{{augmentedData.random.transitScore}}
						</div>
						<div class="score-label">
							transit
						</div>
					</td>
					<td>
						<div class="score">
							{{augmentedData.random.schoolsScore}}
						</div>
						<div class="score-label">
							schools
						</div>
					</td>
				</tr>
			</table>
		</div>
		<div class="public-remarks" style="padding-bottom: 60px;">
			<!-- {{publicRemarks}} -->
		
			<div class="inline-header">Neighborhood intelligence</div>
			<div>
				{{#each augmentedData.yelp}}
					<div class="yelp">
						<div class="interest"> {{term}} </div>
						{{#each data.businesses}}
						<div class="interest-item clearfix">
							<div class="interest-image">
								<img src={{image_url}} />
							</div>
							<div class="interest-text">
								<div class="clearfix">
									<div class="interest-name"><a href="{{mobile_url}}"> {{name}} </a></div>
									<div class="interest-rating">{{rating}}</div>
								</div>
								<div class="excerpt">
									"{{snippet_text}}"
								</div>
							</div>
						</div>
						{{/each}}
					</div>
				{{/each}}
			</div>
		</div>
	</div>
	
	<div class="no super-box" id="noBox">
		<div class="main-box">
			<div class="reason-button goToNextListing">
				price
			</div>
			<div class="reason-button goToNextListing">
				neighborhood
			</div>
			<div class="reason-button goToNextListing">
				floorplan
			</div>
			<div class="reason-button goToNextListing">
				other
			</div>
		</div>
	</div>

	<div class="maybe super-box" id="maybeBox">
		<div class="main-box">
			<div class="reason-button goToNextListing">
				save for later
			</div>
			<div class="reason-button goToNextListing">
				ask brian
			</div>
		</div>
	</div>

	<div class="yes super-box" id="yesBox">
		<div class="main-box">
			<div class="reason-button goToNextListing">
				call brian
			</div>
			<div class="reason-button goToStaticB">
				book a viewing
			</div>
		</div>
	</div>

	<div class="footer">
    {{#each comments}}
  		<div class="agent-comment">
  			<div class="agent">
  				<img src="{{userImageURL}}">
  			</div>
  			<div class="comment">
  				{{text}}
  			</div>
  		</div>
    {{/each}}
		<table>
			<tr>
				<td class="no" id="noButton">
					<div class="glyphicon glyphicon-remove"></div>
				</td>
				<td class="maybe" id="maybeButton">
					<div style="font-size:36px; line-height:36px; padding-top: 2px;">?</div>
				</td>
				<td class="yes" id="yesButton">
					<div class="glyphicon glyphicon-ok"></div>
				</td>
			</tr>
		</table>
	</div>
 </div>
</div>
"""

class RealKick.View.Index extends RealKick.View.Base

  templateHTML: template

  listing: null
  events:
    'click #noButton': 'showNo'
    'click #maybeButton': 'showMaybe'
    'click #yesButton': 'showYes'
    'click .goToNextListing': 'goToNextListing'
    'click .goToStaticB': 'goToStaticB'

  showNo: =>
    $('#noBox').css 'visibility', 'visible'

  showMaybe: =>
    $('#maybeBox').css 'visibility', 'visible'

  showYes: =>
    $('#yesBox').css 'visibility', 'visible'

  listings: []
  listing: null
  maxListings: 4

  goToNextListing: =>
    @listingId++
    if @listingId > @maxListings
      @listingId = 1
    @listing = @listings[@listingId]
    @render()

  goToStaticB: =>
    RealKick.Router.router.navigate 'b', {trigger:true}

  postInitialize: =>
    @initializeListings()
    @fetchListings()
    @listing = 1
    @listing = @listings[@listingId]

  initializeListings: =>
    listings = []
    for i in [1..@maxListings]
      @listings[i] = new RealKick.Model.Listing
        id: i
    @listing = @listings[@listingId]

  fetchListings: =>
    for i in [1..@maxListings]
      @listings[i] = new RealKick.Model.Listing
        id: i
      @listings[i].fetch
        success: () =>
          @renderTemplate()

  getTemplateData: =>
    data = {}
    if @listing
      data = @listing.decorate()
      commentsCollection = new RealKick.Collection.Comment
      commentsCollection.set @listing.get('comments')
      data.comments = _.invoke( commentsCollection.models, 'decorate' )
    data

  postRender: =>
    $('#listing-carousel').carousel
      interval: 3000