import * as gulp from 'gulp';
import * as path from 'path';
import { electron } from './utils/electron';

/**
 * Starts the electron listener for livereload
 * Sets up a listener on the AngularCLI dist directory for changes
 */
gulp.task('build.watch', () => {
    electron.start();
    return gulp.watch(path.join(process.cwd(), '/dist/**.*'), [
        'build.npm.copy',
        'build.restart'
    ]);
});
