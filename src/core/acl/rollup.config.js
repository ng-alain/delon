const resolve = require('rollup-plugin-node-resolve');

const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/router': 'ng.router',

    'ng-zorro-antd': 'ngZorro.antd',

    'rxjs/observable/fromEvent': 'Rx.Observable',

    '@delon/theme': 'alain.theme'
};

module.exports = {
    sourcemap: true,
    rollup: require('rollup'),
    context: 'this',
    name: 'alain.acl',
    output: 'acl.umd.js',
    format: 'umd',
    plugins: [
        resolve({
            jsnext: true,
            main: true
        })
    ],
    external: Object.keys(globals),
    globals: globals
};
