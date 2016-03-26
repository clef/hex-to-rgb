var webpackConfig = require('./webpack.config.js')
webpackConfig.devtool = 'inline-source-map'
delete webpackConfig.entry
delete webpackConfig.output

module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['chai', 'mocha'],
    files: [
      'tests.bundle.js'
    ],
    preprocessors: {
      'tests.bundle.js': ['webpack', 'sourcemap']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    webpack: webpackConfig
  })
}
