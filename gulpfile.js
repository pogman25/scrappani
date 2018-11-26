const gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('dev', function(callback) {
	exec('node src/app.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        callback(err);
    });
});