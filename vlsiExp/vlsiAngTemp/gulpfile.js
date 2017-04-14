var jshint = require('gulp-jshint');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');
var cleanCSS = require('gulp-clean-css');
var uglifycss = require('gulp-uglifycss');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var inject = require('gulp-inject');

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

gulp.task('errors', function () {
    return gulp.src(srcFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('concat', function () {
    return gulp.src(srcFiles)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./lib/'));
});

gulp.task('index', function () {
    var target = gulp.src('./src/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths: 
    var sources = gulp.src(['./dist/*.js'], {
        read: false
    });

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./src'));
});
gulp.task('minify-css', function () {
    return gulp.src('css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify', function () {
    return gulp.src('index.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'));
});
gulp.task('default', () =>
    gulp.src('./img/*/*/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);
