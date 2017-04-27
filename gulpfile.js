var gulp        = require('gulp');
var pug         = require('gulp-pug');
var locals      = require('./locals.js');
var browserSync = require('browser-sync').create();

// Save a reference to the `reload` method

// Watch scss AND html files, doing different things with each.
gulp.task('serve',['pug'], function () {

  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

});

gulp.task('pug', function buildHTML() {

  return gulp.src('*.pug')
  .pipe(pug({
    // Your options in here.
    locals:locals
  }))
  .pipe(gulp.dest("./"));
});

gulp.task('reload',['pug'],function(){
  browserSync.reload();
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('*.pug', ['pug','reload']);
});

gulp.task('default',['watch','pug','serve','reload'])
