import { task, src, dest } from 'gulp';
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const rollup = require('gulp-rollup');
const wrap = require('gulp-wrap');
const bump = require('gulp-bump');
const runSequence = require('run-sequence');
const inline_recources = require('../util/inline-resources');
// @ts-ignore
const VERSION = require('../../../package.json').version_laster;
const NEXTVERSION = require('../../../package.json').version_next;

const paths = {
    build: './.ng_build',
    lib: './.lib',
    scaffold: './scaffold/',
    scaffoldSrc: './scaffold/src/',
    scaffoldApp: './scaffold/src/app/'
};

task('copy-sources', copySources);
task('inline-resources', copyResources);
task('bundle:umd:theme', bundleUmdTheme);
task('bundle:umd:abc', bundleUmdABC);
task('bundle:umd:acl', bundleUmdACL);
task('bundle:umd:auth', bundleUmdAuth);
task('bundle:umd:mock', bundleUmdMock);
task('bundle:umd:cache', bundleUmdCache);
// @ts-ignore
task('bundle', <any>[
    'bundle:umd:theme', 'bundle:umd:abc', 'bundle:umd:acl', 'bundle:umd:auth', 'bundle:umd:mock',
    'bundle:umd:cache' ]);
task('bump', bumpVersions);
task('bump:next', bumpNextVersions);
// cli
task('cli', cliResources);

const versionPaths = [
    './package.json',
    './scaffold/package.json',
    './packages/theme/package.json',
    './packages/abc/package.json',
    './packages/acl/package.json',
    './packages/auth/package.json',
    './packages/mock/package.json',
    './packages/cache/package.json'
];

function bumpVersions() {
    src(versionPaths, {base: './'})
        .pipe(bump({
            version: VERSION
        }))
        .pipe(dest('./'));
}

function bumpNextVersions() {
    src(versionPaths, {base: './'})
        .pipe(bump({
            version: NEXTVERSION
        }))
        .pipe(dest('./'));
}

function copySources() {
    src(['./packages/**/*', '!./packages/cli/**/*'])
        .pipe(dest(paths.build))
        ;
}

function cliResources() {
    // others

    src([
        'utility', 'class', 'directive', 'enum', 'interface', 'pipe', 'service', 'guard', 'app-shell'
    ].map(v => `node_modules/@schematics/angular/${v}/**`),
    { base: 'node_modules/@schematics/angular/' }).pipe(dest('./packages/cli'));
    // .vscode
    src([
        `${paths.scaffold}.vscode/**`
    ], { base: paths.scaffold + '.vscode/' }).pipe(dest('./packages/cli/application/files/__dot__vscode'));
    // normal files
    src([
        `${paths.scaffold}_nginx/**`,
        `${paths.scaffold}e2e/**`,
        `${paths.scaffold}docker-compose.debug.yml`,
        `${paths.scaffold}docker-compose.yml`,
        `${paths.scaffold}Dockerfile`,
        `${paths.scaffold}LICENSE`,
        `${paths.scaffold}README.md`,
        `${paths.scaffold}README-zh_CN.md`,
        `${paths.scaffold}tslint.json`,
        `${paths.scaffold}karma.conf.js`,
        `${paths.scaffold}tsconfig.json`,
        `${paths.scaffold}protractor.conf.js`,
        `${paths.scaffold}package-lock.json`
    ], { base: paths.scaffold }).pipe(dest('./packages/cli/application/files'));
    // source
    src([
        `${paths.scaffoldSrc}styles/**`,
        `${paths.scaffoldSrc}testing/**`,
        `${paths.scaffoldSrc}environments/environment.hmr.ts`,
        `${paths.scaffoldSrc}environments/environment.prod.ts`,
        `${paths.scaffoldSrc}environments/environment.ts`,
        `${paths.scaffoldSrc}favicon.ico`,
        `${paths.scaffoldSrc}hmr.ts`,
        `${paths.scaffoldSrc}main.ts`,
        `${paths.scaffoldSrc}test.ts`,
        `${paths.scaffoldSrc}tsconfig.spec.json`,
        `${paths.scaffoldSrc}typings.d.ts`
    ], { base: paths.scaffoldSrc }).pipe(dest('./packages/cli/application/files/__sourcedir__/'));
    // app
    src([
        `${paths.scaffoldApp}/core/i18n/**`,
        `${paths.scaffoldApp}/core/net/**`,
        `${paths.scaffoldApp}/core/module-import-guard.ts`,
        `${paths.scaffoldApp}/core/README.md`,
        `${paths.scaffoldApp}/layout/fullscreen/**`,
        `${paths.scaffoldApp}/layout/passport/**`,
        `${paths.scaffoldApp}/layout/default/default.component.html`,
        `${paths.scaffoldApp}/layout/default/default.component.spec.ts`,
        `${paths.scaffoldApp}/layout/default/default.component.ts`,
        `${paths.scaffoldApp}/layout/default/header/components/i18n.component.ts`,
        `${paths.scaffoldApp}/layout/default/header/components/icon.component.ts`,
        `${paths.scaffoldApp}/layout/default/header/components/notify.component.ts`,
        `${paths.scaffoldApp}/layout/default/header/components/task.component.ts`,
        `${paths.scaffoldApp}/layout/default/header/components/user.component.ts`,
        `${paths.scaffoldApp}/shared/README.md`,
        `${paths.scaffoldApp}/routes/callback/**`,
        `${paths.scaffoldApp}/routes/exception/**`,
        `${paths.scaffoldApp}/routes/passport/**`
    ], { base: paths.scaffoldApp }).pipe(dest('./packages/cli/application/other-files/'));
}

function copyResources() {
  src([
      `${paths.build}/**/*.html`,
      `${paths.build}/**/*.css`,
      `${paths.build}/**/*.less`,
      `${paths.build}/**/LICENSE.txt`,
      `${paths.build}/**/README.md`,
      `${paths.build}/**/rollup.config.js`,
      `${paths.build}/**/package.json`
    ])
    .pipe(dest(paths.lib))
    .on('end', () => inline_recources(paths.lib));
}

function bundleUmdTheme() {
    bundle(`${paths.lib}/theme/`);
}

function bundleUmdABC() {
    bundle(`${paths.lib}/abc/`);
}

function bundleUmdACL() {
    bundle(`${paths.lib}/acl/`);
}

function bundleUmdAuth() {
    bundle(`${paths.lib}/auth/`);
}

function bundleUmdMock() {
    bundle(`${paths.lib}/mock/`);
}

function bundleUmdCache() {
    bundle(`${paths.lib}/cache/`);
}

function bundle(path: string) {
    const config = require(`../../../${path}rollup.config.js`);
    src(path + `**/*.js`)
        .pipe(rollup(Object.assign({}, config, {
            name: config.name,
            input: `${path}index.js`
        })))
        .pipe(rename(config.output))
        .pipe(dest(`${path}bundles`));
}
