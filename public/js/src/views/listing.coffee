template = """
  <h3>{{address}}</h3>

  <div>List price: {{listingPrice}}</div>
  <div>Number of bedrooms: {{numBedrooms}}</div>
  <div>Number of bathrooms: {{numBathrooms}}</div>
  <div>Square feet: {{squareFeet}}</div>
  <div>Listing date: {{listingDate}}</div>
  <div>Has garage parking? {{#if hasGarageParking}}yes{{else}}no{{/if}}</div>
  <div>Year built: {{yearBuilt}}</div>

  {{#each comments}}
    <img src='{{userImageURL}}' />
    {{text}}
  {{/each}}  

  {{#each photos}}
    <img src='{{Location}}' />
  {{/each}}
"""

class RealKick.View.Listing extends RealKick.View.Base

  templateHTML: template

  listing: null

  postInitialize: =>
    @listing = new RealKick.Model.Listing
      id: @listingId
    @commentsCollection = new RealKick.Collection.Comment

  postRender: =>
    @listing.fetch
      success: () =>
        @commentsCollection.set @listing.get('comments')
        @renderTemplate()
      error: () =>
        console.log 'failed to get listing: ', @listing

  getTemplateData: =>
    data = @listing.decorate()
    data.comments = _.invoke( @commentsCollection.models, 'decorate' )
    data