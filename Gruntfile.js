module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    //makes node configurations available for use
    pkg: grunt.file.readJSON('package.json'),
    // This is where we configure JSHint
    jshint: {
      //tell JSHint which files to validate
      myFiles: ['client/**/*.js', 'server/*.js']
    }
  });
  //plugins must be loaded following this pattern
  grunt.loadNpmTasks('grunt-contrib-jshint');

};