const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('markup-works', function() {
	return gulp
		.src('src/views/works/index.pug')
		.pipe(
			pug({
				data: {
					title: 'Scrappani',
					phone: '+7-960-477-789-4',
					email: 'scrappani@yandex.ru',
				},
			})
		)
		.pipe(gulp.dest('src/public/works'));
});
