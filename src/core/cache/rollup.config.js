const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');

const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/router': 'ng.router',
    '@angular/common/http': 'ng.common.http',
    '@angular/forms': 'ng.forms',

    'ng-zorro-antd': 'ngZorro.antd',
    'moment': 'moment',

    'rxjs/Observable': 'Rx',
    'rxjs/Observer': 'Rx',
    'rxjs/BehaviorSubject': 'Rx',
    'rxjs/operators': 'Rx.Observable.prototype',
    'rxjs/observable/of': 'Rx.Observable',
    'rxjs/observable/fromEvent': 'Rx.Observable',
    'rxjs/observable/FromEventObservable': 'Rx.Observable',
    'rxjs/observable/ErrorObservable': 'Rx.Observable',

    '@delon/theme': 'alain.theme',
    '@delon/abc': 'alain.abc'
};

module.exports = {
    sourcemap: true,
    rollup: require('rollup'),
    context: 'this',
    name: 'alain.cache',
    output: 'cache.umd.js',
    format: 'umd',
    plugins: [
        replace({ "import * as moment": "import moment" }),
        resolve({
            jsnext: true,
            main: true
        })
    ],
    external: Object.keys(globals),
    globals: globals
};
