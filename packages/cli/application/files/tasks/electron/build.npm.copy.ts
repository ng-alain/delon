import * as gulp from 'gulp';
import * as path from 'path';

/**
 * Copies the package.json required for Electron to create package/bundles
 */
gulp.task('build.npm.copy', () => {
    return gulp.src(path.join(process.cwd(), 'package.json'))
        .pipe(gulp.dest(path.join(process.cwd(), '/dist/')));
});
