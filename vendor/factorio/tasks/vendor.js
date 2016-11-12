const gulp = require('gulp'),
    watch = require('gulp-watch'),
    logger = require('gulp-logger'),
    changed = require('gulp-changed')

module.exports = (options) => {
    gulp.task('vendor', () => {
        return gulp.src(options.vendor.globs)
            .pipe(changed(options.vendor.release))
            .pipe(logger({
                dest: options.vendor.release,
                showChange: true
            }))
            .pipe(gulp.dest(options.vendor.release))
    })

    gulp.task('watch:vendor', () => {
        watch(options.vendor.files, () => {
            gulp.start('vendor')
        })
    })
}