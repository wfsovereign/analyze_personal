var gulp = require('gulp'),
    sass = require('gulp-sass'),
    useref = require('gulp-useref'),
    execSync = require('child_process').execSync;

var sassSource = 'src/sass/*',
    htmlSource = 'src/views/*.html',
    sassDest = 'public/css';

function updateJSFile() {
    var content = 'console.log(' + Math.random() * 10000 + ')';
    execSync('echo "' + content + '" > tmp.js');
    console.log('file update success');
}

gulp.task('sass', function () {
    updateJSFile();
    gulp.src(sassSource)
        .pipe(sass())
        //.pipe(minifycss())
        .pipe(gulp.dest(sassDest));
});

gulp.task('html', function () {
    updateJSFile();
    console.log("let's go watch");
    return gulp.src('src/views/*.html')
        .pipe(useref({searchPath: 'public'}))
        .pipe(gulp.dest('views'));
});

gulp.task('watch', ['html'], function () {
    gulp.watch(htmlSource, ['html']);
    gulp.watch(sassSource, ['sass']);
});

//gulp.task('serve', ['sass'], function () {
//    browserSync.init({
//        server: "./"
//    });
//
//    gulp.watch(sassSource, ['sass']);
//    gulp.watch(htmlSource).on('change', reload);
//});


gulp.task('default', ['watch', 'sass', 'html'], function () {
    console.log("gulp build success.");
});

