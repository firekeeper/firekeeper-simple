const gulp = require('gulp'),
    watch = require('gulp-watch'),
    changed = require('gulp-changed'),
    logger = require('gulp-logger')

module.exports = (options) => {
    gulp.task('media', () => {
        return gulp.src(options.media.globs)
            .pipe(changed(options.media.release))
            .pipe(logger({
                dest: options.media.release,
                showChange: true
            }))
            .pipe(gulp.dest(options.media.release))
    })

    gulp.task('watch:media', () => {
        watch(options.media.files, () => {
            gulp.start('media')
        })
    })
}