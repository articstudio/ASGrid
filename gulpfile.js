'use strict';

var gulp = require('gulp'),
        cleanCSS = require('gulp-clean-css'),
        sass = require('gulp-sass'),
        rename = require('gulp-rename'),
        sourcemaps = require('gulp-sourcemaps'),
        runSequence = require('run-sequence'),
        path = require('path'),
        config = {
            cwd: './',
            sass: {
                source: 'scss/*.scss',
                target: 'dist/'
            },
            minify: {
                source: ['dist/*.css', '!dist/*.min.css'],
                target: 'dist/'
            }
        };

gulp.task('sass', function () {
    return gulp.src(path.join(config.cwd, config.sass.source), {read: true})
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(path.join(config.cwd, config.sass.target)));
});

gulp.task('minify', function () {
    return gulp.src(config.minify.source)
            .pipe(sourcemaps.init())
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(rename({suffix: '.min'}))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(path.join(config.cwd, config.minify.target)));
});

gulp.task('make', function (cb) {
    runSequence(
            'sass',
            'minify',
            cb
            );
});