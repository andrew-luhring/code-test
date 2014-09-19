define([
  'lodash'
, 'formS/register.service'
] , function(_){
  "use strict";
  return ['$scope'
  ,'RegisterService'
  ,'$log'
  , function($scope, RegisterService, $log){
    var meta = $scope
      , form = this;
      form.err = '';
      //refactor
    form.trySubmit = function(val){
      if($scope.rental.$valid){
        var obj = {
          email : val
        };
        RegisterService.register(obj)
          .then(function(data){
            $log.info("end of the day:\n")
            $log.info(data);
            if(data.status === 200){
              form.result = "cool";
              form.err = "ok"
            } else {
              form.result = "not ok";
              form.err = "err";
            }
          });

      } else {
        RegisterService.killItWithFire(true);
      }
    };
    $scope.$watch("form.rentalEmail",function(isValid){
      if(isValid){
        form.invalid = false;
      } else {
        form.invalid = true;
      }
    });

    $scope.FormController = this;
    return $scope.FormController;
  }];
});
