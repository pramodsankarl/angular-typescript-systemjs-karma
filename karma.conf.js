module.exports = function (config) {
    config.set({
        files : [
            "app/**/*.ts"
        ],
        exclude : [],
        frameworks: [
            "systemjs",
            "jasmine"
        ],
        plugins : [
            'karma-systemjs',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-jasmine'
        ],
        browsers: ['Chrome'],
        autoWatch: true,
        systemjs: {
            includeFiles : [
                'bower_components/angular/angular.js',
                'bower_components/angular-mocks/angular-mocks.js'
            ],
            configFile: './grunt-tasks/system.conf.js',
            config: {
                packages: {
                    'app': {
                        defaultExtension: 'ts'
                    }
                },
                transpiler : 'typescript'
            },
            testFileSuffix: "spec.ts"
        }
    });
};