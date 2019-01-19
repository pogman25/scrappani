const gulp = require('gulp');
const webpack = require('webpack-stream');
const webpackConfig = require('../config/webpack.config');

const isDevelopment = !process.env.ENV || process.env.ENV === 'development';

gulp.task('js', function() {
	return gulp
		.src('src/blocks/index.js')
		.pipe(webpack(webpackConfig(isDevelopment)))
		.pipe(gulp.dest('src/public/js'));
});
