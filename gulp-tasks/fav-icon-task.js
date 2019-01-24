const gulp = require('gulp');

gulp.task('fav-icon', function() {
	return gulp.src('src/assets/**/*.ico').pipe(gulp.dest('src/public'));
});
