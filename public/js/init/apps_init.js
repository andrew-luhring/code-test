define([
  'require'
, 'angular'
], function(require, angular){
  "use strict";

    var apps = {
      /**
       * module responsible for form validations and interactions
       * @returns {module}
       */
      form: function(){
        return angular.module('forms', []);
      }
    };

  /**
   * A module which exports all angular modules.
   * @exports init/apps_init
   * @version 1.0
   */
  return apps;
});