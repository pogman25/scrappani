const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('markup-about', function() {
	return gulp
		.src('src/views/about/index.pug')
		.pipe(
			pug({
				data: {
					title: 'Обо мне - Scrappani',
					phone: '+7-960-477-789-4',
					email: 'scrappani@yandex.ru',
				},
			})
		)
		.pipe(gulp.dest('src/public/about'));
});
