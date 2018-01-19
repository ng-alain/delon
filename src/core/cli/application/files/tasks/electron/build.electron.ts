import * as gulp from 'gulp';
import * as path from 'path';
import * as typescript from 'gulp-tsc';

gulp.task('build.electron', () => {
    return gulp.src(['src/electron/**/*.ts'])
        .pipe(typescript())
        .pipe(gulp.dest('dist/'));
});
