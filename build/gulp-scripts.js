'use strict';

let gulp = require('gulp');
let $ = require('gulp-load-plugins')();

let browserify = require('browserify');
let babelify = require('babelify');

let source = require('vinyl-source-stream');
let buffer = require('vinyl-buffer');

let src = require('./sources');

gulp.task('scripts', ['service-worker', 'cache-polyfill', 'manifest'], function() {
  let b = browserify({
    entries: [src.scripts.main],
    debug: true
  }).transform(babelify);

  return b
    .bundle()
    .pipe(source(src.scripts.main))
    .pipe(buffer())
    .pipe($.rename(src.scripts.main_dist))
    .pipe($.sourcemaps.init())
    .pipe($.uglify().on('error', $.util.log))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(src.dist_src));
});

gulp.task('service-worker', function() {
  return gulp.src('public/service-worker.js')
    .pipe(gulp.dest(src.dist));
});

gulp.task('cache-polyfill', function() {
  return gulp.src('public/cache-polyfill.js')
    .pipe(gulp.dest(src.dist));
});

gulp.task('manifest', function() {
  return gulp.src('public/manifest.json')
    .pipe(gulp.dest(src.dist));
});