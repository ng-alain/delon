// import * as fs from 'fs-extra';
import { parallel, series, task, watch } from 'gulp';
import { debounce } from 'lodash';
import { join } from 'path';
import { buildConfig } from '../../build-config';
import { execNodeFileTask, execNodeTask, execTask } from '../util/task-helpers';

const detectPort = require('detect-port');

const filesGlob = join(buildConfig.packagesDir, `**/*.+md`);

// const CI = process.env.CI;

task('watch:site', () => {
  // Globs accepts the Unix-style path separators only
  const globs = [filesGlob].map(p => p.replace(/\\/g, '/'));
  watch(globs).on(
    'change',
    debounce(path => {
      const p = path.replace(/\\/g, '/');
      console.log(`Reload '${p}'`);
      execNodeFileTask('node ./scripts/site/main.js init')(() => {});
    }, 3000),
  );
});

// node scripts/site/main init && ng-alain-plugin-theme -t=themeCss && ng-alain-plugin-theme -t=colorLess
task(
  'init:site',
  series([
    execNodeFileTask('node ./scripts/site/main.js init'),
    execTask('ng-alain-plugin-theme', ['-t', 'themeCss']),
    execTask('ng-alain-plugin-theme', ['-t', 'colorLess']),
  ]),
);

/** Run `ng serve` */
task('serve:site', done => {
  detectPort(4200).then((port: number) => {
    execNodeTask('@angular/cli', 'ng', ['serve', '--port', port === 4200 ? '4200' : '0'])(done);
  });
});

task('start:site', series('init:site', parallel('watch:site', 'serve:site')));
