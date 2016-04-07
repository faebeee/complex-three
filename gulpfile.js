var gulp = require('gulp');
var concat = require('gulp-concat');


gulp.task('default', function() {
    var watcher = gulp.watch('src/**/*.js');
    watcher.on('change', function(event){
        gulp.start('build');
    });

    gulp.start('build');
});

gulp.task('build', function() {
  return gulp.src([
    './lib/**/*.js',
    './src/**/*.js',
    ])
    .pipe(concat('complex-three.js'))
    .pipe(gulp.dest('dist/'));
});
