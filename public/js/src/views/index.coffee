template = """

<div class="fake-phone">
  <div class="fake-screen">
  	<div class="header">
		<img class="ios-header" src="img/ios-top.png" style="width:316px;">
		<div class="text">
			{{internetListing}}
		</div>
	 </div>
  	<div class="container">

	  	
	  	<div id="listing-carousel" class="carousel slide">
	  	
		  <!-- Wrapper for slides -->
		  <div class="carousel-inner">
		    <div class="item active">
		      <img src="http://tempo5.sandicor.com/SNDImages/54/130027318_101_81.jpg">
		    </div>
		    <div class="item">
		      <img src="http://tempo5.sandicor.com/SNDImages/54/130027318_A01_81.jpg">
		    </div>
		    <div class="item">
		      <img src="http://tempo5.sandicor.com/SNDImages/54/130027318_B01_81.jpg">
		    </div>
		    <div class="item">
		      <img src="http://tempo5.sandicor.com/SNDImages/54/130027318_C01_81.jpg">
		    </div>
		    <div class="item">
		      <img src="http://tempo5.sandicor.com/SNDImages/54/130027318_D01_81.jpg">
		    </div>
		    <div class="item">
		      <img src="http://tempo5.sandicor.com/SNDImages/54/130027318_G01_81.jpg">
		    </div>
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

	  	<div class="commute clearfix">
	  		<div class="icon check">
	  		</div>
	  		<div class="time">
	  			Garage Parking
	  		</div>
	  	</div>
	  	<div class="commute clearfix">
	  		<div class="icon check">
	  		</div>
	  		<div class="time">
	  			Balcony
	  		</div>
	  	</div>
	  	<div class="commute clearfix">
	  		<div class="icon check">
	  		</div>
	  		<div class="time">
	  			Swimming Pool
	  		</div>
	  	</div>
	 	<div class="scores">
			<table>
				<tr>
					<td>
						<div class="score">
							{{augmentedData.walkScore.walkscore}}
						</div>
						<div class="label">
							walking
						</div>
					</td>
					<td>
						<div class="score">
							93
						</div>
						<div class="label">
							safety
						</div>
					</td>
					<td>
						<div class="score">
							85
						</div>
						<div class="label">
							transit
						</div>
					</td>
					<td>
						<div class="score">
							40
						</div>
						<div class="label">
							schools
						</div>
					</td>
				</tr>
			</table>
		</div>
		<div class="public-remarks">
			{{publicRemarks}}
		</div>
		<h1> Your Spots Nearby </h1>
		<div>
			{{#each augmentedData.yelp}}
				<div class="yelp">
					<b> {{term}} </b>
					{{#each data.businesses}}
						<img src={{image_url}} />
						<a href="{{mobile_url}}"> {{name}} </a>
						rating: {{rating}}
					{{/each}}
				</div>
			{{/each}}
		</div>
	</div>
  </div>
</div>
<script>
$('#listing-carousel').carousel({
  interval: 3000
})
</script>
"""

class RealKick.View.Index extends RealKick.View.Base

  templateHTML: template

  listing: null

  postInitialize: =>
    @listing = new RealKick.Model.Listing
      id: @listingId

  postRender: =>
    @listing.fetch
      success: () =>
        @renderTemplate()
      error: () =>
        console.log 'failed to get listing: ', @listing

  getTemplateData: =>
    data = @listing.decorate()
    data