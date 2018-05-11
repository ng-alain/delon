import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import sourcemaps from 'rollup-plugin-sourcemaps';

const target = process.env.ROLLUP_TARGET || 'esm';

const globals = {
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/router': 'ng.router',
  '@angular/common/http': 'ng.common.http',

  'rxjs/Observable': 'Rx',
  'rxjs/Observer': 'Rx',
  'rxjs/BehaviorSubject': 'Rx',
  'rxjs/operators': 'Rx.Observable.prototype',
  'rxjs/observable/of': 'Rx.Observable',
  'rxjs/observable/throw': 'Rx.Observable',
  'rxjs/observable/fromEvent': 'Rx.Observable',
  'rxjs/observable/FromEventObservable': 'Rx.Observable',
  'rxjs/observable/ErrorObservable': 'Rx.Observable',

  '@delon/theme': 'delon.theme',
};

const plugins = [sourcemaps(), resolve()];

switch (target) {
  case 'esm':
    Object.assign(globals, {
      tslib: 'tslib',
    });
    break;
  case 'mumd':
    // @ts-ignore
    plugins.push(uglify());
    break;
}

export default {
  exports: 'named',
  name: 'delon.auth',
  plugins,
  external: Object.keys(globals),
  globals,
  output: {
    sourcemap: true,
  },
};
