define([
  'lodash'
], function(_){
  "use strict";
  var arr = [];
  
  function makeRequest($http, $log, val){

    return $http({
      method : 'POST'
    , url : '/join'
    , params : val
    , responseType : 'json'
    }).
      success(function(resp, status, headers, req){
        $log.info(status)
        $log.info ("\n\nrequest:");
        $log.info(req);
        $log.info("\n\nresponse:");
        $log.info(resp);
        return resp;
      }).
      error(function(a,b,c){
        $log.warn (b);
      });
  }
  function killItWithFire($window){
    $window.location.href = "http://www.law.cornell.edu/uscode/text/18/1030#b";

  }
  return ['$http', '$log', '$window', function($http, $log, $window){
    this.register = function(val){
      var resp;
      arr.push(val);
      return resp = makeRequest($http, $log, val);
    };
    this.killItWithFire = function(shouldKill) {
      if(shouldKill){
        killItWithFire ($window);
      }
    }
  }];
});




