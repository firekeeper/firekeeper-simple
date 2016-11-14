const gulp = require('gulp'),
    watch = require('gulp-watch'),
    logger = require('gulp-logger'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin'),
    mode = require('gulp-mode')()

module.exports = (options) => {
    gulp.task('image', () => {
        return gulp.src(options.image.globs)
            .pipe(changed(options.image.release))
            .pipe(logger({
                dest: options.image.release,
                showChange: true
            }))
            .pipe(mode['production'](imagemin()))
            .pipe(gulp.dest(options.image.release))
    })

    gulp.task('watch:image', () => {
        watch(options.image.files, () => {
            gulp.start('image')
        })
    })
}
