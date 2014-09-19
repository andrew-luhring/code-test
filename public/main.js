(function(){
  'use strict';

  var com     = 'js/common'
    , init    = 'js/init'
    , form    = 'js/forms'
    , formS   = form + '/services'
    , formD   = form + '/directives'
    , formC   = form + '/controllers';

  requirejs.config({
    paths : {
      init: init
    , com : com
    , form: form
    , formC : formC
    , formS : formS
    , formD : formD
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


  requirejs([
      'angular'
    , 'jquery'
    , 'init/apps_bootstrap'
    ], function(angular, jquery, apps_bootstrap) {});
  requirejs.onError = function (err) {
    console.log("error type:   "+ err.requireType);
    console.log('modules: ' + err.requireModules);
    console.trace();
    if (err.requireType === 'timeout') {
      console.log('modules: ' + err.requireModules);
    }
    throw err;
  };

  // create a new object that inherits from an old one.
  if (typeof Object.create !== 'function'){
    Object.create = function(o){
      function F(){}
      F.prototype = o;
      return new F();
    };
  }
})();