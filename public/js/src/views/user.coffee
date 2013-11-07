template = """
  <h3>{{address}}</h3>

  <div>List price: {{listingPrice}}</div>
  <div>Number of bedrooms: {{numBedrooms}}</div>
  <div>Number of bathrooms: {{numBathrooms}}</div>
  <div>Square feet: {{squareFeet}}</div>
  <div>Listing date: {{listingDate}}</div>
  <div>Has garage parking? {{#if hasGarageParking}}yes{{else}}no{{/if}}</div>
  <div>Year built: {{yearBuilt}}</div>

  {{#each photos}}
    <img src='{{Location}}' />
  {{/each}}
"""

class RealKick.View.User extends RealKick.View.Base

  templateHTML: template

  postRender: =>
    @listing.fetch
      
      success: () =>
        @renderTemplate()
      error: () =>
        console.log 'failed to get listing: ', @listing

  getTemplateData: =>
    data = @listing.decorate()
    data