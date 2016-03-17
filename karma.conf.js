module.exports = function (config) {
    config.set({
        files : [
            "app/**/*.js"
        ],
        exclude : [],
        frameworks: [
            "systemjs",
            "jasmine"
        ],
        logLevel: config.LOG_DEBUG,
        plugins : [
            'karma-coverage',
            'karma-systemjs',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-jasmine'
        ],
        coverageReporter: {
            type : 'json',
            subdir : '.',
            file : 'coverage-final.json'
        },
        reporters: ['progress', 'coverage'],
        preprocessors:{
            'app/**/!(*.spec).js' : 'coverage'
        },
        browsers: ['PhantomJS'],
        autoWatch: true,
        singleRun:true,
        systemjs: {
            includeFiles : [
                'bower_components/angular/angular.js',
                'bower_components/angular-mocks/angular-mocks.js'
            ],
            configFile: './grunt-helpers/system.conf.js',
            config: {
                packages: {
                    'app': {
                        defaultExtension: 'js'
                    }
                }
            },
            testFileSuffix: "spec.js"
        }
    });
};