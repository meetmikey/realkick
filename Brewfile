# use Grunt.js in future for more robust asset build process
# eg. minification, compilation, etc
@javascript 'scripts', ->
  @options
    build: './build/js'

  @coffeescript './public/js/src', output: './public/js/src'
  @coffeescript './lib', output: './lib'

@stylesheets 'styles', ->
  @options
    build: './build/css'

  @css './public/css', output: './public/css'
  @less './public/css', output: './public/css'
