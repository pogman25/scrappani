const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('markup-contacts', function() {
	return gulp
		.src('src/views/contacts/index.pug')
		.pipe(
			pug({
				data: {
					title: 'Контакты - Scrappani',
					phone: '+7-960-477-789-4',
					email: 'scrappani@yandex.ru',
				},
			})
		)
		.pipe(gulp.dest('src/public/contacts'));
});
