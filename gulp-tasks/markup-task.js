const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');

gulp.task('pug', function buildHTML() {
	return gulp
		.src('src/views/home/index.pug')
		.pipe(
			pug({
				// Your options in here.
			})
		)
		.pipe(gulp.dest('src/public'));
});

// Static server
gulp.task('browserSync', function() {
	browserSync.init({
		server: 'src/public',
	});

	browserSync.watch('src/public/**/*.*').on('change', browserSync.reload);
});

gulp.task('markup-server', gulp.series('pug', 'browserSync'));
