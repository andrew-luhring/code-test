define ([
  'require'
, 'init/apps_init'
, 'formC/form.controller'
, 'formS/register.service'
, 'formD/err.directive'
], function (require, init) {
    "use strict";
    var Form = init.form();
    return Form.
      service('RegisterService', require('formS/register.service')).
      directive('err', require('formD/err.directive')).
      controller('FormController', require('formC/form.controller'));
  }
);



