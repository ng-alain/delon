export default {
  name: 'ng-alain',
  tags: ['NG-ALAIN'],
  version: '0.0.0',
  scripts: {
    ng: 'ng',
    start: 'ng serve',
    build: 'ng build',
    test: 'ng test',
    lint: 'ng lint',
    e2e: 'ng e2e'
  },
  private: true,
  dependencies: {
    rxjs: '7.8.1',
    tslib: '2.6.2',
    'zone.js': '0.14.2',
    '@angular/core': '17.0.6',
    '@angular/forms': '17.0.6',
    '@angular/common': '17.0.6',
    '@angular/router': '17.0.6',
    '@angular/compiler': '17.0.6',
    '@angular/animations': '17.0.6',
    '@angular/platform-browser': '17.0.6'
  },
  devDependencies: {
    '@angular-devkit/build-angular': '~0.1100.4',
    '@angular/cli': '~11.0.4',
    '@angular/compiler-cli': '~11.0.4',
    '@types/jasmine': '~3.6.0',
    '@types/node': '^12.11.1',
    codelyzer: '^6.0.0',
    'jasmine-core': '~3.6.0',
    'jasmine-spec-reporter': '~5.0.0',
    karma: '~5.1.0',
    'karma-chrome-launcher': '~3.1.0',
    'karma-coverage': '~2.0.3',
    'karma-jasmine': '~4.0.0',
    'karma-jasmine-html-reporter': '^1.5.0',
    protractor: '~7.0.0',
    'ts-node': '~8.3.0',
    tslint: '~6.1.0',
    typescript: '~4.0.2'
  }
};
