const gulp = require('gulp');
// const plumber = require('gulp-plumber');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');


gulp.task('webpack', function() {
	webpack(webpackConfig, (err, stats) => {
		if (err)
			console.log(err, stats)
	})
})

gulp.task('build', ['webpack'])

gulp.task('watch', function() {
	gulp.watch(['src/**/*', '!src/static/**/*'], ['webpack']);
})