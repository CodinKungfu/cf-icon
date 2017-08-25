var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var plumber = require('gulp-plumber');

gulp.task('concat-css', function () {
  gulp.src(['./cf-icons.css'])
  .pipe(plumber())
  .pipe(concatCss('./cf-icons.min.css'))
  .pipe(gulp.dest('./'));
});

gulp.task('minify-css', function() {
  gulp.src('./cf-icons.min.css')
  .pipe(plumber())
  .pipe(minifyCSS())
  .pipe(gulp.dest('./'))
});
