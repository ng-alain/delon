export default {
  name: 'ng-alain',
  version: '0.0.0',
  scripts: {
    ng: 'ng',
    start: 'ng serve --disable-host-check',
    build: 'ng build',
    test: 'ng test',
    lint: 'ng lint',
    e2e: 'ng e2e'
  },
  private: true,
  dependencies: {
    '@angular/animations': '~12.1.1',
    '@angular/common': '~12.1.1',
    '@angular/compiler': '~12.1.1',
    '@angular/core': '~12.1.1',
    '@angular/forms': '~12.1.1',
    '@angular/platform-browser': '~12.1.1',
    '@angular/platform-browser-dynamic': '~12.1.1',
    '@angular/router': '~12.1.1',
    rxjs: '~6.6.0',
    tslib: '^2.2.0',
    'zone.js': '~0.11.4'
  },
  devDependencies: {
    '@angular-devkit/build-angular': '~12.1.1',
    '@angular/cli': '~12.1.1',
    '@angular/compiler-cli': '~12.1.1',
    '@types/jasmine': '~3.6.0',
    '@types/node': '^12.11.1',
    'jasmine-core': '~3.7.0',
    karma: '~6.3.0',
    'karma-chrome-launcher': '~3.1.0',
    'karma-coverage': '~2.0.3',
    'karma-jasmine': '~4.0.0',
    'karma-jasmine-html-reporter': '^1.5.0',
    typescript: '~4.3.2'
  }
};
