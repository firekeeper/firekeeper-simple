const gulp = require('gulp'),
    // zip = require('gulp-zip')
    zip = require('gulp-vinyl-zip').zip
    // archiver = require('gulp-archiver')

module.exports = (options) => {
    gulp.task('zip', () => {
        return gulp.src(options.zip.globs)
            .pipe(zip('release.zip'))
            .pipe(gulp.dest(options.zip.release))
    })
}