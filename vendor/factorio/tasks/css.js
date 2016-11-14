const gulp = require('gulp'),
    watch = require('gulp-watch'),
    changed = require('gulp-changed'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    cssnano = require('gulp-cssnano'),
    plumber = require('gulp-plumber'),
    logger = require('gulp-logger'),
    mode = require('gulp-mode')()

module.exports = (options) => {
    gulp.task('css', () => {
        return gulp.src(options.css.globs)
            .pipe(changed(options.css.release))
            .pipe(plumber())
            .pipe(logger({
                dest: options.css.release,
                extname: '.css',
                showChange: true
            }))
            .pipe(mode['development'](sourcemaps.init()))
            .pipe(autoprefixer())
            .pipe(mode['production'](cssnano()))
            .pipe(mode['development'](sourcemaps.write()))
            .pipe(gulp.dest(options.css.release))
    })

    gulp.task('watch:css', () => {
        watch(options.css.files, () => {
            gulp.start('css')
        })
    })
}