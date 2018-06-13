// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function(config) {
  const configuration = {
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, 'coverage'),
      reports: ['html', 'lcovonly', 'text', 'text-summary'],
      fixWebpackSourcePaths: true,
    },
    angularCli: {
      environment: 'dev',
    },
    reporters:
      config.angularCli && config.angularCli.codeCoverage
        ? ['dots', 'coverage-istanbul']
        : ['dots', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'ChromeHeadless',
        flags: ['--disable-translate', '--disable-extensions'],
      },
    },
    mime: { 'text/x-typescript': ['ts', 'tsx'] },
    client: { captureConsole: true, clearContext: false },
    browserNoActivityTimeout: 60000,
    captureTimeout: 60000,
  };

  if (process.env.TRAVIS) {
    configuration.browsers = ['ChromeHeadless'];
  }

  config.set(configuration);
};
