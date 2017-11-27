import { task, src, dest } from 'gulp';
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const rollup = require('gulp-rollup');
const less = require('gulp-less');
const bump = require('gulp-bump');
const runSequence = require('run-sequence');
const inline_recources = require('../utils/inline-resources');
// @ts-ignore
const VERSION = require('../../../package.json').version;

const paths = {
    build: './.ng_build',
    lib: './.lib'
};

task('copy-sources', copySources);
task('inline-resources', copyResources);
task('bundle:umd:theme', bundleUmdTheme);
task('bundle:umd:abc', bundleUmdABC);
task('bundle:umd:acl', bundleUmdACL);
// @ts-ignore
task('bundle', <any>[ 'bundle:umd:theme', 'bundle:umd:abc', 'bundle:umd:acl' ]);
task('bump', bumpVersions);

function bumpVersions() {
    src([
        './package.json',
        './src/core/theme/package.json',
        './src/core/abc/package.json',
        './src/core/acl/package.json'], {base: './'})
        .pipe(bump({
            version: VERSION
        }))
        .pipe(dest('./'));
}
function copySources() {
    src('./src/core/**/*')
        .pipe(dest(paths.build))
        .on('end', replaceLessWithCSS)
        ;
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
