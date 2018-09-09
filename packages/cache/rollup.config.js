import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import sourcemaps from 'rollup-plugin-sourcemaps';

const target = process.env.ROLLUP_TARGET || 'esm';

const globals = {
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/router': 'ng.router',
  '@angular/common/http': 'ng.common.http',
  '@angular/forms': 'ng.forms',

  'rxjs'          : 'Rx',
  'rxjs/operators': 'Rx.Observable.prototype',

  'date-fns/add_seconds': 'date-fns/add_seconds/index',
};

const listOfDateFns = ['addSeconds'];

const listOfReplace = listOfDateFns.map(name => {
  const map = {};
  map[`import * as ${name}`] = `import ${name}`;
  return replace(map);
});

const plugins = [sourcemaps(), ...listOfReplace, resolve()];

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
    name: 'delon.cache',
    sourcemap: true,
    globals,
  },
};
