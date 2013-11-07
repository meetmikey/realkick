template = """
  <div>listing!</div>
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

  postRender: =>
    @listing.fetch
      success: () =>
        @renderTemplate()
      error: () =>
        console.log 'failed to get listing: ', @listing

  getTemplateData: =>
    data = @listing.decorate()
    data