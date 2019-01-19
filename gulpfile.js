const gulp = require('gulp');
const hub = require('gulp-hub');
const nodemon = require('gulp-nodemon');

hub(['./gulp-tasks/*.js']);

gulp.task('fonts', function() {
	return gulp.src('src/assets/fonts/**/*.*').pipe(gulp.dest('src/public/fonts'));
});

gulp.task('watch', function() {
	gulp.watch('src/blocks/**/*.scss', gulp.series('sass'));
	gulp.watch('src/assets/images/**/*.*', gulp.series('images'));
});

gulp.task(
	'build',
	gulp.series('clean', gulp.parallel('fonts', 'js', gulp.parallel('images', 'sass')))
);

gulp.task('server', function(done) {
	nodemon({
		script: 'src/app.js',
		ext: 'js pug css',
		ignore: ['gulpfile.js', 'node_modules/'],
		done: done,
	});
});

gulp.task(
	'dev',
	gulp.series(
		'clean',
		gulp.series(
			gulp.parallel('images', 'sass', 'fonts'),
			gulp.parallel('watch', 'js', 'server')
		)
	)
);

gulp.task('default', function() {
	// place code for your default task here
});
