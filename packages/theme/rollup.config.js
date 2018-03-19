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

    'ng-zorro-antd': 'ngZorro.antd',
    '@delon/acl': 'delon.acl',

    'rxjs/BehaviorSubject': 'Rx',
    'rxjs/Observable': 'Rx',
    'rxjs/Subject': 'Rx',
    'rxjs/Subscription': 'Rx',
    'rxjs/operators': 'Rx.Observable.prototype',
    'rxjs/observable/zip': 'Rx.Observable',
    'rxjs/observable/fromEvent': 'Rx.Observable',
    'rxjs/observable/FromEventObservable': 'Rx.Observable',
    'rxjs/observable/combineLatest': 'Rx.Observable',
    'rxjs/add/observable/throw': 'Rx.Observable',

    'date-fns/format': 'date-fns/format/index',
    'date-fns/parse': 'date-fns/parse/index',
    'date-fns/distance_in_words_to_now': 'date-fns/distance_in_words_to_now/index'
};

const listOfDateFns = [
    'format',
    'parse',
    'distanceInWordsToNow'
];

const listOfReplace = listOfDateFns.map(name => {
    const map = {};
    map[`import * as ${name}`] = `import ${name}`;
    return replace(map)
});

const plugins = [
    sourcemaps(),
    ...listOfReplace,
    resolve()
];

switch (target) {
    case 'esm':
        Object.assign(globals, {
            'tslib': 'tslib',
        });
        break;
    case 'mumd':
        // @ts-ignore
        plugins.push(uglify());
        break;
}

export default {
    exports: 'named',
    name: 'delon.theme',
    plugins,
    external: Object.keys(globals),
    globals,
    output: {
        sourcemap: true
    }
}
