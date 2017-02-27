// -------------------------------------------------------------------
// :: CLEAN
// -------------------------------------------------------------------
// - https://www.npmjs.org/package/gulp-clean

var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function () {

    return gulp.src([
        '.temp'
    ], { read: false })
        .pipe(clean());
});