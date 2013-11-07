template = """

<div class="fake-phone">
  <div class="fake-screen">
  	<div class="header">
		<img class="ios-header" src="img/ios-top.png" style="width:316px;">
		<div class="text">
			{{address}}
		</div>
	 </div>
  	<div class="container">

	  	
	  	<div id="listing-carousel" class="carousel slide">
	  		
		  <!-- Indicators -->
		  <!-- <ol class="carousel-indicators">
		    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
		    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
		    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
		  </ol> -->

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
	  				$3,496,000
	  			</td>
	  			<td>
	  				4 <small>BD</small>
	  			</td>
	  			<td>
	  				5 <small>BA</small>
	  			</td>
	  			<td>
	  				590 <small>SQFT</small> 
	  			</td>
	  		</tr>
	  	</table>
	  	<div class="commute clearfix">
	  		<div class="icon bike">
	  		</div>
	  		<div class="time">
	  			15 minutes to YourCompany
	  		</div>
	  	</div>
	  	<div class="commute clearfix">
	  		<div class="icon check">
	  		</div>
	  		<div class="time">
	  			2 car garage
	  		</div>
	  	</div>
	  	<div class="commute clearfix">
	  		<div class="icon check">
	  		</div>
	  		<div class="time">
	  			Trader Joe's nearby
	  		</div>
	  	</div>
	  	<div class="commute clearfix">
	  		<div class="icon check">
	  		</div>
	  		<div class="time">
	  			Fireplace
	  		</div>
	  	</div>
	 	<div class="scores">
			<table>
				<tr>
					<td>
						<div class="score">
							87
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
							88
						</div>
						<div class="label">
							transit
						</div>
					</td>
					<td>
						<div class="score">
							68
						</div>
						<div class="label">
							schools
						</div>
					</td>
				</tr>
			</table>
		</div>
		<div class="public-remarks">
			"Live in the exclusive, exquisite Electra. Open and spacious unit located on the 16th floor with panoramic views of the city. Bamboo flooring, travertine throughout both baths, private balcony with incredible views. Open Kitchen with granite counters, Bosh and Thermador appliances.  Featured amenities include: sauna, steam room, fitness center, outdoor seating, pool, spa, BBQ area and concierge services."
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