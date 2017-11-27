const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');

const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/router': 'ng.router',
    '@angular/common/http': 'ng.common.http',

    'ng-zorro-antd': 'ngZorro.antd',
    'moment': 'moment',

    'rxjs/Observer': 'Rx',
    'rxjs/Observable': 'Rx',
    'rxjs/observable/fromEvent': 'Rx.Observable',
    'rxjs/operators/tap': 'Rx.Observable.prototype',
    'rxjs/operators/catchError': 'Rx.Observable.prototype',
    'rxjs/operators/filter': 'Rx.Observable.prototype'
};

module.exports = {
    sourcemap: true,
    rollup: require('rollup'),
    context: 'this',
    name: 'alain.theme',
    output: 'theme.umd.js',
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
