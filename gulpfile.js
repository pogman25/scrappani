const gulp = require('gulp');
const sass = require('gulp-sass');
const gulpIf = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const image = require('gulp-image');
const del = require('del');
const webpack = require('webpack-stream');
const webpackConfig = require('./config/webpack.config');
const nodemon = require('gulp-nodemon');
const cache = require('gulp-cache');

const isDevelopment = !process.env.ENV || process.env.ENV === 'development';

gulp.task('clean', function() {
	return del(['src/public/**/*']);
});

gulp.task('sass', function() {
	return gulp
		.src('src/blocks/index.scss')
		.pipe(gulpIf(isDevelopment, sourcemaps.init()))
		.pipe(
			sass({
				outputStyle: 'compressed',
			})
		)
		.pipe(
			gulpIf(
				!isDevelopment,
				postcss([
					postcssPresetEnv({
						browsers: ['last 2 versions', 'Firefox ESR', 'not ie < 11'],
					}),
				])
			)
		)
		.pipe(gulpIf(isDevelopment, sourcemaps.write()))
		.pipe(gulp.dest('src/public'));
});

gulp.task('js', function() {
	return gulp
		.src('src/blocks/index.js')
		.pipe(webpack(webpackConfig(isDevelopment)))
		.pipe(gulp.dest('src/public/js'));
});

gulp.task('fonts', function() {
	return gulp.src('src/assets/fonts/**/*.*').pipe(gulp.dest('src/public/fonts'));
});

gulp.task('images', function() {
	return gulp
		.src('src/assets/images/**/*.*')
		.pipe(cache(image()))
		.pipe(gulp.dest('src/public/images'));
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
