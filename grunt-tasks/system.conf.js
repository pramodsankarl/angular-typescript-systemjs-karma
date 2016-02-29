System.config({
    map: {
        systemjs: "bower_components/system.js/dist/system.src.js",
        'system-polyfills': 'bower_components/system.js/dist/system-polyfills.js',
        typescript: "node_modules/typescript/lib/typescript.js",
        'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js'
    },
    transpiler: "typescript"
});
