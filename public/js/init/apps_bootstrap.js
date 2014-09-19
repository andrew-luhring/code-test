/*jshint expr: true*/
define([
  'require'
, 'angular'
, 'form/form'
], function(require, angular, form) {
  "use strict";

  /**
   * The module responsible for bootstrapping angular apps to the page.
   * @exports init/apps_bootstrap
   * @version 1.0
   */


  angular.bootstrap(document.body, [
    form.name
   ]);

  return angular;
});