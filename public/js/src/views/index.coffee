template = """

<div class="fake-phone">
  <div class="fake-screen">
  	<div class="header">
		<img class="ios-header" src="img/ios-top.png" style="width:316px;">
		<div class="text">
			700 West E Street
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
	  			Fire place
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