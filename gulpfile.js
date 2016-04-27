var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-clean-css');


var sassSource = 'public/sass/*',
    jsSource = 'public/js/*',
    imageSource = 'public/images/*',
    imageDest = 'public/images',
    sassDest = 'public/css',
    jsDest = 'public/js';


gulp.task('sass', function () {
    gulp.src(sassSource)
        .pipe(sass())
        //.pipe(minifycss())
        .pipe(gulp.dest(sassDest));
});

//gulp.task('js', function () {
//    gulp.src(jsSource)
//        //.pipe(uglify())
//        //.pipe(rename('all.min.js'))
//        .pipe(gulp.dest(jsDest))
//});

//gulp.task('images', function () {
//    gulp.src(imageSource)
//        //.pipe(imagemin({
//        //    progressive: true
//        //}))
//        .pipe(gulp.dest(imageDest))
//});

gulp.task('default', ['sass'], function () {
    console.log("gulp build success.");
});

//gulp.task('watch', ['sass', 'js', 'images'], function () {
//    gulp.watch(sassSource, ['sass']);
//    gulp.watch(jsSource, ['js']);
//    gulp.watch(imageDest, ['images']);
//});
