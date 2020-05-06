// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
const tags = process.env && process.env['NG_TEST_TAGS'];

module.exports = function (config) {
  const configuration = {
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular', 'viewport'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-spec-reporter'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-junit-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-viewport')
    ],
    client: {
      jasmine: {
        random: false
      },
      clearContext: true, // leave Jasmine Spec Runner output visible in browser
      ...tags && { args: [tags] }
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly', 'text-summary', 'cobertura'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml', 'spec', 'junit'],
    junitReporter: {
      outputDir: '../junit'
    },
    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: false
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    singleRun: false,
    restartOnFileChange: true,
    browserDisconnectTimeout: 1800000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 3000000,
    captureTimeout: 1800000,
  };

  config.set(configuration);
};
