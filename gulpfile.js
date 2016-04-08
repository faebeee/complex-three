var gulp = require('gulp');
var concat = require('gulp-concat');


gulp.task('default', function() {
    gulp.start('complex');
});

gulp.task('complex', function() {
  return gulp.src([
     './lib/**/*.js',
    './src/**/*.js',
    ])
    .pipe(concat('complex-three.js'))
    .pipe(gulp.dest('dist/'));
});
