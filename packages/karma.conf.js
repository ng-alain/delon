// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
const karmaParallel = require('karma-parallel');

module.exports = function (config) {
  const configuration = {
    basePath: '',
    frameworks: [
      'jasmine',
      '@angular-devkit/build-angular'
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-summary-reporter'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
      timeout: 180000,
      jasmine: {
        random: false
      }
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml', 'summary'],
    summaryReporter: {
      // 'failed', 'skipped' or 'all'
      show: 'failed',
      // Limit the spec label to this length
      specLength: 50,
      // Show an 'all' column as a summary
      overviewColumn: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
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
