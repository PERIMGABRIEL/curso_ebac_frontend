const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


function compileSass() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
}


function compressImages() {
    return gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
}


function compressJS() {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify()) 
        .pipe(gulp.dest('dist/js'));
}


function watch() {
    gulp.watch('src/scss/**/*.scss', compileSass);
    gulp.watch('src/img/**/*', compressImages);
    gulp.watch('src/js/**/*.js', compressJS);
}


exports.default = watch;

