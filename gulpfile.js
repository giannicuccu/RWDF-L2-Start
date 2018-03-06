
var gulp = require('gulp');
var inlineimg = require('gulp-inline-image');
 
gulp.task('default', function () {
  gulp.src('html_src/**/*.html')
    .pipe(inlineimg('images_src'))  // takes in the directory to use as the root when looking for images
    .pipe(gulp.dest('./'));
});