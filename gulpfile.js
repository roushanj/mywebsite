const gulp = require('gulp');

gulp.task('renderhandlebars', function() {
	
	gulp.src('src/*.handlebars')
       .pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
	return console.log('gulp in action');
});