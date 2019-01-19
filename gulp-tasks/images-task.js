const gulp = require('gulp');
const image = require('gulp-image');
const cache = require('gulp-cache');

gulp.task('images', function() {
	return gulp
		.src(['src/assets/images/**/*.*', 'src/assets/icons/**/*.*'])
		.pipe(cache(image()))
		.pipe(gulp.dest('src/public/images'));
});
