// tslint:disable
import { task, src, dest } from 'gulp';
import * as path from 'path';
import * as fs from 'fs';
import chalk from 'chalk';
import { File, PluginError } from "gulp-util";
const del = require('del');
const runSequence = require('run-sequence');
const transform = require('gulp-transform');
const gulpClean = require('gulp-clean');
const rename = require('gulp-rename');
const ghPages = require('gulp-gh-pages');

import { gen } from './utils/process';
import { cleanTask, copyTask } from '../util/task_helpers';
const siteRoot = `../../../site/`;
const config = require(siteRoot + 'site.config.js');
// region: load template
const tpl = {
    doc: fs.readFileSync(`${config.theme.templates}/doc.ts`).toString('utf8'),
    module: fs.readFileSync(`${config.theme.templates}/module.ts`).toString('utf8')
};
// endregion

const allBuild: string[] = [];
config.router.forEach((item: any) => {
    const taskName = `site:build:${item.name}`;
    if (!Array.isArray(item.src)) item.src = [ item.src ];
    item.full_src = item.src.map((p: string) => path.normalize(p));
    item.theme = config.theme;
    item.tpl = tpl;

    task(taskName, () => {
        console.info(chalk.blue(`=====begin build: ${item.name}=====`));
        const config = Object.assign({}, item);
        src(config.src.map((p: string) => `${p}/**/*.md`))
            .pipe(gen(config))
            ;
    });

    // todo: test
    // if (item.name === 'components')
        allBuild.push(taskName);
});

task('site:clean', () => {
    return src(config.theme.dist, { read: false }).pipe(gulpClean(null));
});

task('site:404', () => {
    return src(siteRoot + 'dist/index.html').pipe(rename('404.html')).pipe(dest('.'));
});

task('site:cname', copyTask(siteRoot + 'CNAME', siteRoot + 'dist'));

task('site:ghpages', () => {
    return src(siteRoot + 'dist/**/*').pipe(ghPages());
});

task('site:gen', (cb) => {
    runSequence('site:clean', allBuild);
});

task('site:deploy', (cb) => {
    runSequence([ 'site:404', 'site:cname' ], 'site:ghpages');
});
