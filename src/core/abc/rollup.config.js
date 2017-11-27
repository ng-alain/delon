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
    'ng-zorro-antd-extra': 'ngZorro.antd_extra',
    'file-saver': 'saveAs',

    'rxjs/operators': 'Rx.Observable.prototype',
    'rxjs/observable/fromEvent': 'Rx.Observable',
    'rxjs/observable/FromEventObservable': 'Rx.Observable',

    '@delon/theme': 'alain.theme'
};

module.exports = {
    sourcemap: true,
    rollup: require('rollup'),
    context: 'this',
    name: 'alain.abc',
    output: 'abc.umd.js',
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
