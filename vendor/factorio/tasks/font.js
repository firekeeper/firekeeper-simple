const gulp = require('gulp'),
    watch = require('gulp-watch'),
    logger = require('gulp-logger'),
    changed = require('gulp-changed')

module.exports = (options) => {
    gulp.task('font', () => {
        return gulp.src(options.font.globs)
            .pipe(changed(options.font.release))
            .pipe(logger({
                dest: options.font.release,
                showChange: true
            }))
            .pipe(gulp.dest(options.font.release))
    })

    gulp.task('watch:font', () => {
        watch(options.font.files, () => {
            gulp.start('font')
        })
    })
}
