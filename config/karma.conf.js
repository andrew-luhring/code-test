/*jshint expr: true, undef: true , strict: false*/
module.exports = function (config) {
  const ASSETS_DIR  = './public/'
    , JS_DIR        = ASSETS_DIR  + 'js/'
    , CSS_DIR       = ASSETS_DIR  + 'css/'
    , LESS_DIR      = ASSETS_DIR  + 'less/'
    , LIB_DIR       = ASSETS_DIR  + 'lib/'
    , TEST_DIR      = 'tests/'
    , TEST_DIR_REC  = TEST_DIR    + '**/'
    , CSS_F         = CSS_DIR     + 'style.css'
    , MAIN_F        = ASSETS_DIR  + 'main.js'
    , TEST_F        = TEST_DIR    + 'test-main.js'
    , GLOB = {
        lib     : LIB_DIR     + '*.js'
      , lib_rec : LIB_DIR     + '**/*.js'
      , lib_recr: LIB_DIR     + '**/**/*.js'
      , less    : LESS_DIR    + '*.less'
      , js      : JS_DIR      + '*.js'
      , js_rec  : JS_DIR      + '**/*.js'
      , js_recr : JS_DIR      + '**/**/*.js'
      , test_rec: TEST_DIR_REC+ '_*.js'
      };


  var karmaObj = {
    basePath : '../'
  , frameworks : ['jasmine', 'requirejs']
  , files : [
      CSS_F
    , {pattern : GLOB.lib     , included : false}
    , {pattern : GLOB.lib_rec , included : false}
    , {pattern : GLOB.lib_recr, included : false}
    , {pattern : GLOB.js      , included : false}
    , {pattern : GLOB.js_rec  , included : false}
    , {pattern : GLOB.js_recr , included : false}
    , {pattern : GLOB.test_rec, included : false}
    , TEST_F
    ]
  , exclude : [
        '**/*ignore*'
      , 'tests/e2e/*'
      , MAIN_F
    ]
  , reporters: [
      'dots'
    , 'growl'
    ]
  , port : 9876
  , colors : true
  , captureTimeout : 60000
  , singleRun : false
  , logLevel : config.LOG_INFO
//  , logLevel : config.LOB_DEBUG,
  , autoWatch : true
  , browsers : ['PhantomJS']
//  ,  browsers : ['Chrome']
    };
  config.set(karmaObj);
};
