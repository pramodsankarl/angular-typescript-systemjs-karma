module.exports = function(grunt) {
    require('load-grunt-config')(grunt);
    grunt.registerTask('compile', ['ts']);
    grunt.registerTask('test', ['karma:unit']);
    grunt.registerTask('default', ['serve']);
};