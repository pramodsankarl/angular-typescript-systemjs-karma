module.exports = {
    options: {
        compiler: './node_modules/typescript/bin/tsc'
    },
    default: {
        tsconfig: {
            passThrough: true
        },
        watch: '.'
    }
};