const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


gulp.task('default', function() {

   gulp.src('views/*.handlebars')
       .pipe(gulp.dest('dist'));

   gulp.src('public/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));

   gulp.src('public/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));


	return console.log('gulp in action');
});

