module.exports = {
    verbose: true,
    plugins: {
        local: {
            browsers: ['chrome', 'firefox', 'safari']
        },
        sauce: {
            disabled: true
        }
    },
    suites: [
      'test/px-simple-bar-chart-tests.html'
    ]
};
