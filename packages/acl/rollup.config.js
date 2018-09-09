import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import sourcemaps from 'rollup-plugin-sourcemaps';

const target = process.env.ROLLUP_TARGET || 'esm';

const globals = {
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/router': 'ng.router',

  'rxjs'          : 'Rx',
  'rxjs/operators': 'Rx.Observable.prototype',
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
  plugins,
  external: Object.keys(globals),
  output: {
    exports: 'named',
    name: 'delon.acl',
    sourcemap: true,
    globals,
  },
};
