var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var mocha = require('gulp-mocha');

gulp.task('jshint', function() {
    // return gulp.src(['src/**/*', 'test/**/*js', 'test/**/*json'])
    return gulp.src(['src/**/*', 'test/**/*js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('test-single', function () {
    return gulp.src('test/**/*-test.js', {read: false})
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('default', ['jshint', 'test-single'], function() {
    gulp.watch(['src/**', 'test/**'], ['jshint', 'test-single']);    
});
