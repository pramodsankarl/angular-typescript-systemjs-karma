module.exports = {
    build: {
        src: 'coverage/coverage-final.json',
        reports: {
            'type': 'html',
            'json': 'coverage/coverage-final.json',
            'dest' : './coverage'
        }
    }
};