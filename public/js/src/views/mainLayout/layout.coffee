template = """
  <div id="rkContent"></div>
"""

class RealKick.View.MainLayout.Layout extends RealKick.View.Base

  #Need to declare templateName here in this one master layout.  Otherwise it's not necessary.  
  templateHTML: template
  events:
    'click .scrollTo': 'scrollToAnchor'

  scrollToAnchor: (event) =>
    scrollTo = $(event.currentTarget).attr('data-scroll-to')
    $('html, body').animate {
      scrollTop: $(scrollTo).offset().top
    }, 1000

  preInitialize: =>
    @setElement $('#rkContainer')

  postRender: =>
    selector = '.fake-screen'
    #textareaWidth = document.getElementById( selector ).scrollWidth
    #document.getElementById( selector ).style.width = textareaWidth + "px"