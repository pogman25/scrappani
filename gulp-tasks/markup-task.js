const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const hub = require('gulp-hub');

hub(['./markup-tasks/*.js']);

gulp.task(
	'pug',
	gulp.parallel('markup-home', 'markup-about', 'markup-works', 'markup-contacts')
);

// Static server
gulp.task('browserSync', function() {
	browserSync.init({
		server: 'src/public',
	});

	browserSync.watch('src/public/**/*.*').on('change', browserSync.reload);
});

gulp.task('markup-server', gulp.series('pug', 'browserSync'));
