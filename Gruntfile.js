/*jshint expr: true, strict: false*/
function lintOptions() {
  var opts = {
    laxcomma: true
    , bitwise: true
    , curly: true
    , esnext: true
    , eqeqeq: true
    , forin: true
    , latedef: true
    , newcap: true
    , noarg: true
    , nonew: false
    , undef: true
    , unused: false
    , trailing: false
    , node: true
    , smarttabs: true
    , debug: true
    , sub: true
    , supernew: true
    , browser: true
    , devel: true
    , strict: true
    , globals: {
        describe: true
      , ddescribe : true
      , xdescribe: true
      , it: true
      , iit: true
      , xit: true
      , inject:true
      , expect: true
      , before: true
      , beforeEach: true
      , after: true
      , afterEach: true
      , define: true
      , jquery : true
      , jQuery : true
      , $ : true
      , angular : true
      , require : true
      , requirejs : true
    }
   }
  return opts;
}
module.exports = function(grunt) {

  const ASSETS_DIR  = "./public/"
    , STYLE_DIR     = ASSETS_DIR + "css/"
    , LESS_DIR      = ASSETS_DIR + "less/"
    , cssF          = STYLE_DIR + "style.css"
    , lessF         = LESS_DIR  + "style.less"
    , JS_DIR        = ASSETS_DIR + 'js/'
    , TEST_DIR      = 'tests/'

    , jsFiles = [
        JS_DIR    + '*.js'
      , JS_DIR    + '**/*.js'
      , JS_DIR    + '**/**/*.js'
      , TEST_DIR  + '*.js'
      , TEST_DIR  + '**/*.js'
      , TEST_DIR  + '**/**/*.js'
      ]
    , lessFiles = [
        LESS_DIR + "*.less"
      , LESS_DIR + "partials/*.less"
      ]

    , lesscmd = 'node ./node_modules/.bin/lessc ' +
      '--source-map-map-inline --source-map ' +
      '--source-map-rootpath=../less/ ' + lessF + ' ' + cssF

    , config = {
        pkg: grunt.file.readJSON('package.json')
      , shell: {
          less: {
            command: lesscmd
          , options: {
              stdout: true
            , stderr: true
            , failOnError: true
            }
          }
        }
      , jshint: {
          src: [jsFiles]
        , options: lintOptions()
        }
      , watch: {
          js: {
            files: jsFiles
          , tasks: ['jshint']
          , options: {spawn: false}
          }
        , less: {
            files : lessFiles
          , tasks : ['shell:less']
          , options: {
              livereloadOnError: false
            , livereload:true
            , spawn: false
            , atBegin: true
            }
          }
        }
      };

  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask("jshint", ['jshint'] );
  grunt.registerTask("less", ['shell:less'] );
  grunt.registerTask("default", ["watch"]);
};



