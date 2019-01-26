const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('markup-home', function() {
	return gulp
		.src('src/views/home/index.pug')
		.pipe(
			pug({
				data: {
					title: 'Scrappani',
					homeBannerTitle: 'Scrappani',
					homeBannerSubtitle: 'Альбомы и блокноты',
					phone: '+7-960-477-789-4',
					email: 'scrappani@yandex.ru',
				},
			})
		)
		.pipe(gulp.dest('src/public'));
});
