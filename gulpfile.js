const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/*.scss', ['sass']);
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('watch', function () {
    gulp.watch(['./index.html', 'css/styles.css'], function() {
        return connect.reload();
    });
});

gulp.task('default', ['connect', 'watch', 'sass', 'sass:watch']);