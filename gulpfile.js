const gulp = require('gulp');
const hub = require('gulp-hub');

hub(['./gulp-tasks/*.js']);

gulp.task('watch', function() {
	gulp.watch('src/blocks/**/*.scss', gulp.series('sass'));
	gulp.watch('src/assets/images/**/*.*', gulp.series('images'));
	gulp.watch('src/views/**/*.*', gulp.series('pug'));
});

gulp.task(
	'build',
	gulp.series('clean', gulp.parallel('fonts', 'js', 'fav-icon', gulp.parallel('images', 'sass')))
);

gulp.task(
	'dev',
	gulp.series(
		'clean',
		gulp.series(
			gulp.parallel('images', 'sass', 'fonts', 'fav-icon'),
			gulp.parallel('watch', 'js', 'server')
		)
	)
);

gulp.task(
	'markup',
	gulp.series(
		'clean',
		gulp.series(
			gulp.parallel('images', 'sass', 'fonts', 'fav-icon'),
			gulp.parallel('watch', 'js', 'markup-server')
		)
	)
);

gulp.task('default', function() {
	// place code for your default task here
});
