// Karma configuration file, see link for more information

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular', 'viewport'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-spec-reporter'),
      require('karma-viewport'),
      require('karma-junit-reporter'),
    ],
    client: {
      jasmine: {
        random: false,
      },
      clearContext: true // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      subdir: '.',
      dir: require('path').join(__dirname, '../coverage'),
      reporters: [{ type: 'html' }, { type: 'text-summary' }, { type: 'lcovonly' }, { type: 'cobertura' }],
    },
    reporters: ['progress', 'kjhtml', 'spec', 'junit'],
    junitReporter: {
      outputDir: '../junit',
    },
    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: false,
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--disable-gpu', '--no-sandbox']
      }
    },
    singleRun: false,
    // restartOnFileChange: true,
    browserDisconnectTimeout: 1000 * 60 * 10, // (Default: 2000)
    browserNoActivityTimeout: 1000 * 60 // (Default: 10000)
  });
};
