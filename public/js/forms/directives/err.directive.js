define([], function(){
  "use strict";

  return function(){
    return {
      scope: {
        email: "="
      }
    , restrict: 'A'
    , link : function(scope, elem, attr){

      }
    , template: '<div class="error">{{error.cause}}</div>'
    };
  };
});