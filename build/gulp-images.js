var gulp = require('gulp');
var src = require('./sources');

gulp.task('images', function() {
  return gulp.src('public/images/**/*.png')
    .pipe(gulp.dest(src.dist + '/images'));
});