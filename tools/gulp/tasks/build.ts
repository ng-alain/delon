import { task, src, dest } from 'gulp';
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const rollup = require('gulp-rollup');
const less = require('gulp-less');
const wrap = require('gulp-wrap');
const bump = require('gulp-bump');
const runSequence = require('run-sequence');
const inline_recources = require('../utils/inline-resources');
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
task('cli-sources', cliResources);
task('cli-i18n', cliI18n);
task('cli', <any>[ 'cli-sources', 'cli-i18n' ]);

const versionPaths = [
    './package.json',
    './scaffold/package.json',
    './src/core/theme/package.json',
    './src/core/abc/package.json',
    './src/core/acl/package.json',
    './src/core/auth/package.json',
    './src/core/mock/package.json',
    './src/core/cache/package.json',
    './src/core/cli/package.json'
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
    src(['./src/core/**/*', '!./src/core/cli/**/*'])
        .pipe(dest(paths.build))
        .on('end', replaceLessWithCSS)
        ;
}

function cliResources() {
    // others
    src([
        `node_modules/@schematics/angular/utility/**`
    ], { base: 'node_modules/@schematics/angular/' }).pipe(dest('./src/core/cli'));
    // .vscode
    src([
        `${paths.scaffold}.vscode/**`
    ], { base: paths.scaffold + '.vscode/' }).pipe(dest('./src/core/cli/application/files/__dot__vscode'));
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
        `${paths.scaffold}protractor.conf.js`
    ], { base: paths.scaffold }).pipe(dest('./src/core/cli/application/files'));
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
        `${paths.scaffoldSrc}tsconfig.app.json`,
        `${paths.scaffoldSrc}tsconfig.spec.json`,
        `${paths.scaffoldSrc}typings.d.ts`
    ], { base: paths.scaffoldSrc }).pipe(dest('./src/core/cli/application/files/__sourcedir__/'));
    // app
    src([
        `${paths.scaffoldApp}/layout/**`,
        `${paths.scaffoldApp}/core/net/**`,
        `${paths.scaffoldApp}/core/module-import-guard.ts`,
        `${paths.scaffoldApp}/core/README.md`,
        `${paths.scaffoldApp}/shared/README.md`,
        `${paths.scaffoldApp}/routes/callback/**`,
        `${paths.scaffoldApp}/routes/exception/**`,
        `${paths.scaffoldApp}/routes/passport/**`,
        `!${paths.scaffoldApp}/layout/layout.module.ts`,
        `!${paths.scaffoldApp}/layout/default/default.component.html`,
        `!${paths.scaffoldApp}/layout/default/header/components/langs.component.ts`,
        `!${paths.scaffoldApp}/layout/default/header/header.component.html`
    ], { base: paths.scaffoldApp }).pipe(dest('./src/core/cli/application/other-files/'));
}

function cliI18n() {
    // file wrap
    src([
        `${paths.scaffoldApp}/layout/default/header/components/langs.component.ts`,
        `${paths.scaffoldApp}/core/i18n/**`
    ], { base: paths.scaffoldApp })
    .pipe(wrap('<%= "\\<% if (delonI18n) { %\\>" %><%= contents %><%= "\\<% } %\\>" %>'))
    .pipe(dest('./src/core/cli/application/other-files/', { overwrite: true }));
}

function replaceLessWithCSS() {
    src(`${paths.build}/**/*.ts`)
        .pipe(replace('.less', '.css'))
        .pipe(dest(paths.build))
        .on('end', compileLess);
}

function compileLess() {
    src([
            `${paths.build}/**/*.less`,
            `!${paths.build}/theme/styles/**/*.less`
        ])
      .pipe(less())
      .pipe(dest(paths.build));
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
