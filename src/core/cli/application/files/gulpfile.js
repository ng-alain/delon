const gulp = require('gulp');
const typescript = require('gulp-tsc');

const options = {
    pattern: ['tasks/**/*.js']
};

require('load-gulp-tasks')(gulp, options, {});

gulp.task('default', [
    'build.default'
]);

gulp.task('build.tasks', () => {
    gulp.src(['tasks/**/*.ts'])
        .pipe(typescript())
        .pipe(gulp.dest('tasks/'));
});
