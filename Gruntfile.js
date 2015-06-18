module.exports = function (grunt) {

  grunt.initConfig({
    uglify: {
      emit: {
        files: {
          'emit.min.js': ['emit.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);

  return;

}
