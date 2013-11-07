template = """

<div class="fake-phone">
  <div class="fake-screen">

    <div class="header clearfix">
      <div class="ios-header clearfix"><img src="img/ios-top.png" style="width:316px;">
      </div>
      <div class="header-nav clearfix">
         <div class="header-button pull-left">
            <div class="glyphicon glyphicon-align-justify"></div>
              </div>
              <div class="text">
                Ron Burgundy
              </div>
              <div class="header-button pull-right">
                <div style="font-size: 20px; line-height: 20px;" class="glyphicon glyphicon-cog"></div>
              </div>
      		</div>
				</div>
   		<div style="padding-top:63px" class="container profile-page">
   		<div class="clearfix">
	   			<div class="profile-box clearfix">
		   			<div class="client-profile">
		   				<img src="img/ron.jpg">
		   			</div>
		   			<div class="scores">
				<table class="clearfix">
					<tr>
						<td>
							<div class="score">
								6
							</div>
							<div class="score-label">
								beds
							</div>
						</td>
						<td>
							<div class="score">
								4
							</div>
							<div class="score-label">
								baths
							</div>
						</td>
						<td>
							<div class="score">
								$1M
							</div>
							<div class="score-label">
								budget
							</div>
						</td>
						<td>
							<div class="score">
								5000
							</div>
							<div class="score-label">
								SQFT
							</div>
						</td>
					</tr>
				</table>
			</div>
			<table class="client-preferences">
				<tr>
					<td>
						<div class="interest">
							Priorities
						</div>
							Safe neighborhood<br>
							Public transit<br>
							Walkability<br>
							Public schools<br>
							Pool<br>
					</td>
					<td>
						<div class="interest">
							Interests
						</div>
							Fine Scotch<br>
							Golf<br>
							Jazz music<br>
							Olympic figure skating
					</td>
				</tr>
			</table>
		</div>
		<table class="profile-nav">
			<tr>
				<td>
					<div class="glyphicon glyphicon-remove"></div>
				</td>
				<td>
					<div class="glyphicon" style="font-size:30px; font-weight:900; line-height:30px; margin-top: -12px;">?</div>
				</td>
				<td>
					<div class="glyphicon glyphicon-ok"></div>
				</td>
				<td>
					<div class="glyphicon glyphicon-home active"></div>
				</td>
			</tr>
		</table>
		
	   		</div>
   			<div class="client clearfix" style="margin-top:4px;">
   				<div class="client-name house">
   					1257 Chestnut Street <span class="time-stamp pull-right">offer made</span>
   				</div>
	   		</div>
	   		<div class="client clearfix">
   				<div class="client-name house">
   					30 Iris Crescent <span class="time-stamp pull-right">open house 11/9</span>
   				</div>
	   		</div>
	   		<div class="client clearfix inactive">
   				<div class="client-name house">
   					26 Bates Court <span class="time-stamp pull-right">didn't like layout</span>
   				</div>
	   		</div>
	   		<div class="client clearfix inactive">
   				<div class="client-name house">
   					428 Queen Street East <span class="time-stamp pull-right">outbid </span>
   				</div>
	   		</div>
	   		<div class="client clearfix inactive">
   				<div class="client-name house">
   					222 Richmond Street East <span class="time-stamp pull-right">sold early</span>
   				</div>
	   		</div>
	   		<div class="client clearfix inactive">
   				<div class="client-name house">
   					455 Valencia Street <span class="time-stamp pull-right">pool too small</span>
   				</div>
	   		</div>
	   		<div class="client clearfix inactive">
   				<div class="client-name house">
   					488 Wilson Avenue <span class="time-stamp pull-right">outbid</span>
   				</div>
	   		</div>
	   		<div class="client clearfix inactive">
   				<div class="client-name house">
   					23 Jacksonvile Road <span class="time-stamp pull-right">poor condition</span>
   				</div>
	   		</div>

	   		


                 
		</div>
 </div>
</div>
"""

class RealKick.View.Static.D extends RealKick.View.Base

  templateHTML: template