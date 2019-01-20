const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('server', function(done) {
	nodemon({
		script: 'src/app.js',
		ext: 'js pug css',
		ignore: ['gulpfile.js', 'node_modules/'],
		done: done,
	});
});
