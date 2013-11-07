template = """

<div class="fake-phone">
  <div class="fake-screen">
  	<div class="container">
	  	<div class="header">
	  		700 West E Street
	  	</div>
	  	<div id="listing-carousel" class="carousel slide">
		  <!-- Indicators -->
		  <ol class="carousel-indicators">
		    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
		    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
		    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
		  </ol>

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
		    <span class="glyphicon glyphicon-chevron-left"></span>
		  </a>
		  <a class="right carousel-control" href="#listing-carousel" data-slide="next">
		    <!-- <span class="glyphicon glyphicon-chevron-right"></span> -->
		  </a>
		</div>

  </div>
</div>
<script>
$('#listing-carousel').carousel({
  interval: 2000
})
</script>
"""

class RealKick.View.Index extends RealKick.View.Base

  templateHTML: template