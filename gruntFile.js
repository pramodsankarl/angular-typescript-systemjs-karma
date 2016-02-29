module.exports = function(grunt) {
    grunt.initConfig({
        serve: {
            options: {
                port: 9000
            }
        },
        ts: {
            options: {
                compiler: './node_modules/typescript/bin/tsc'
            },
            default: {
                tsconfig: {
                    passThrough: true
                },
                watch: '.'
            }
        },
        karma: {
            unit: {
                configFile: './karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('compile', ['ts']);
    grunt.registerTask('test', ['karma:unit']);
    grunt.registerTask('default', ['serve']);
};