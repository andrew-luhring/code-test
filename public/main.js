(function(){
  'use strict';

  var ASSETS_DIR = './'
    , JS_DIR  = ASSETS_DIR +'js/'
    , com= JS_DIR + 'common'
    , init= JS_DIR + 'init'
    , form = JS_DIR + 'form';

  requirejs.config({
    paths : {
      init: init
    , com : com
    , form: form
    , angular: 'lib/angular/angular'
    , jquery: 'lib/jquery/dist/jquery'
    , lodash: 'lib/lodash/dist/lodash.compat'
    , mocks: 'lib/angular-mocks/angular-mocks'
    }
  , shim: {
      angular: { exports : 'angular' }
    , mocks: {
        deps: ['angular']
      , exports: 'angular.mock'
      }
    }
  });

  requirejs.onError = function (err) {
    console.log("error type:   "+ err.requireType);
    console.log('modules: ' + err.requireModules);
    console.trace();
    if (err.requireType === 'timeout') {
      console.log('modules: ' + err.requireModules);
    }
    throw err;
  };
  requirejs([
      'angular'
    , 'jquery'
    , 'init/apps_bootstrap' ], function(angular, jquery, apps_bootstrap) {
      }
  );
  // create a new object that inherits from an old one.
  if (typeof Object.create !== 'function'){
    Object.create = function(o){
      function F(){}
      F.prototype = o;
      return new F();
    };
  }
})();