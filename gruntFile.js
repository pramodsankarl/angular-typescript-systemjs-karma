module.exports = function (grunt) {
    require('load-grunt-config')(grunt);

    //TODO need to figure out why load grunt config does not load remapIstanbul
    grunt.registerMultiTask('riCover', "Typescript code coverage", function () {
        var options = this.data;
        var reports = (options || {}).reports || {};

        var loadCoverage = require('remap-istanbul/lib/loadCoverage');
        var remap = require('remap-istanbul/lib/remap');
        var writeReport = require('remap-istanbul/lib/writeReport');

        var collector = remap(loadCoverage(options.src));
        //Write json
        writeReport(collector,'json', reports.json);
        //write custom type
        writeReport(collector, reports.type, reports.dest);
    });

    grunt.registerTask('compile', ['ts']);
    grunt.registerTask('test', ['ts:build', 'karma:unit', 'riCover:build']);
    grunt.registerTask('default', ['serve']);
};