const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const gulpIf = require('gulp-if');

const isDevelopment = !process.env.ENV || process.env.ENV === 'development';

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
		.pipe(csso())
		.pipe(gulpIf(isDevelopment, sourcemaps.write()))
		.pipe(gulp.dest('src/public'));
});
