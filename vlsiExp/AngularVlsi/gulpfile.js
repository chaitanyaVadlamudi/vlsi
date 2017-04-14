var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var concat = require('gulp-concat');



var uglify = require('gulp-uglify');
var pump = require('pump');

var srcFiles = ['./vlsi/*/*.js', './vlsi/*.js'];
 
gulp.task('compress', function (cb) {
  pump([
        gulp.src('./lib/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});
 
gulp.task('errors', function() {
  return gulp.src(srcFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('concat', function() {
  return gulp.src(srcFiles)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./lib/'));
});
var gulp = require('gulp');
var inject = require('gulp-inject');
 
gulp.task('index', function () {
  var target = gulp.src('./src/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['./dist/*.js'], {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./src'));
});
