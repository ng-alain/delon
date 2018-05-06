import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import sourcemaps from 'rollup-plugin-sourcemaps';

const target = process.env.ROLLUP_TARGET || 'esm';

const globals = {
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/router': 'ng.router',
  '@angular/common/http': 'ng.common.http',
  '@angular/forms': 'ng.forms',

  'ng-zorro-antd': 'ngZorro.antd',
  'ng-zorro-antd-extra': 'ngZorro.antd_extra',
  'file-saver': 'saveAs',
  'ngx-countdown': 'ngxCountDown',
  xlsx: 'xlsx',
  jszip: 'jszip',

  '@angular/cdk': 'ng.cdk',
  '@angular/cdk/coercion': 'ng.cdk.coercion',
  '@angular/cdk/overlay': 'ng.cdk.overlay',
  '@angular/cdk/portal': 'ng.cdk.portal',

  'rxjs/BehaviorSubject': 'Rx',
  'rxjs/Observable': 'Rx',
  'rxjs/Subject': 'Rx',
  'rxjs/Subscription': 'Rx',
  'rxjs/operators': 'Rx.Observable.prototype',
  'rxjs/observable/of': 'Rx.Observable',
  'rxjs/observable/zip': 'Rx.Observable',
  'rxjs/observable/fromEvent': 'Rx.Observable',
  'rxjs/observable/FromEventObservable': 'Rx.Observable',
  'rxjs/observable/combineLatest': 'Rx.Observable',

  'date-fns/format': 'date-fns/format/index',
  'date-fns/parse': 'date-fns/parse/index',
  'date-fns/add_seconds': 'date-fns/add_seconds/index',
  'date-fns/add_weeks': 'date-fns/add_weeks/index',
  'date-fns/start_of_week': 'date-fns/start_of_week/index',
  'date-fns/end_of_week': 'date-fns/end_of_week/index',
  'date-fns/sub_weeks': 'date-fns/sub_weeks/index',
  'date-fns/start_of_month': 'date-fns/start_of_month/index',
  'date-fns/end_of_month': 'date-fns/end_of_month/index',
  'date-fns/sub_months': 'date-fns/sub_months/index',
  'date-fns/start_of_year': 'date-fns/start_of_year/index',
  'date-fns/end_of_year': 'date-fns/end_of_year/index',
  'date-fns/sub_years': 'date-fns/sub_years/index',
  'date-fns/add_days': 'date-fns/add_days/index',

  '@delon/theme': 'alain.theme',
  '@delon/acl': 'alain.acl',
};

const listOfDateFns = [
  'format',
  'parse',
  'addSeconds',
  'addWeeks',
  'startOfWeek',
  'endOfWeek',
  'subWeeks',
  'startOfMonth',
  'endOfMonth',
  'subMonths',
  'startOfYear',
  'endOfYear',
  'subYears',
  'addDays',
];

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

module.exports = {
  exports: 'named',
  name: 'delon.abc',
  plugins,
  external: Object.keys(globals),
  globals,
  output: {
    sourcemap: true,
  },
};
