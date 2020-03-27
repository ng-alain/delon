// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
const tags = process.env && process.env['NG_TEST_TAGS'];
const processENV = require('process');
processENV.env.CHROME_BIN = require('puppeteer').executablePath();

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

  if (process.env.TRAVIS) {
    const executors = (Math.ceil(require('os').cpus().length / 2));
    console.log(`executors cpus: `, executors);
    configuration.frameworks.splice(0, 0, 'parallel');
    configuration.plugins.push(karmaParallel);
    configuration.parallelOptions = {
      executors,
      shardStrategy: 'round-robin'
    };
    configuration.browsers = ['ChromeHeadless'];
  }

  config.set(configuration);
};
