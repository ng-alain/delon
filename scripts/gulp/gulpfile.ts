// tslint:disable:no-import-side-effect
import { series, task } from 'gulp';
import './tasks/clean';

import './tasks/site';

// task('build:release', series('clean', 'build:library', 'build:release-site'));

// task('build:preview', series('clean', 'init:site', 'build:site-doc-es5'));

task('start:dev', series('clean', 'start:site'));
