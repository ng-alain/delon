import * as gulp from 'gulp';
import { electron } from './utils/electron';
/**
 * Restarts the current electron window instance with the changes
 */
gulp.task('build.restart', electron.restart);
