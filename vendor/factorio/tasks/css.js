const gulp = require('gulp'),
    watch = require('gulp-watch'),
    changed = require('gulp-changed'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    cssnano = require('gulp-cssnano'),
    plumber = require('gulp-plumber'),
    logger = require('gulp-logger')

module.exports = (options) => {
    gulp.task('css', () => {
        return gulp.src(options.css.globs)
            .pipe(changed(options.css.release))
            .pipe(plumber())
            .pipe(logger({
                dest: options.css.release,
                extname: options.css.extname,
                showChange: true
            }))
            .pipe(sourcemaps.init())
            .pipe(autoprefixer())
            .pipe(cssnano())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(options.css.release))
    })

    gulp.task('watch:css', () => {
        watch(options.css.files, () => {
            gulp.start('css')
        })
    })
}