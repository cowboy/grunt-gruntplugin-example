/*
 * grunt-gruntplugin-example
 * https://github.com/cowboy/grunt-gruntplugin-example
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('gruntplugin-example', 'Your task description goes here.', function() {
    grunt.log.write(grunt.helper('gruntplugin-example'));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('gruntplugin-example', function() {
    return 'gruntplugin-example!!!';
  });

};
