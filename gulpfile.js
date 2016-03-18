var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    less = require('gulp-less'),
    rename = require('gulp-rename');

gulp.task('compile', function () {
  return gulp.src('./less/ASGrid.less', {read: true})
      .pipe(less())
      .pipe(gulp.dest('./build'))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({suffix:'.min'}))
      .pipe(gulp.dest('./build'));
});