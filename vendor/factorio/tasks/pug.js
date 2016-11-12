const gulp = require('gulp'),
    watch = require('gulp-watch'),
    logger = require('gulp-logger'),
    plumber = require('gulp-plumber'),
    changed = require('gulp-changed'),
    htmlBeautify = require('gulp-html-beautify'),
    htmlmin = require('gulp-htmlmin'),
    pug = require('gulp-pug')

module.exports = (options) => {
    gulp.task('pug', () => {
        return gulp.src(options.pug.globs)
            .pipe(changed(options.pug.release))
            .pipe(plumber())
            .pipe(logger({
                dest: `${options.release}/view`,
                extname: '.pug',
                showChange: true
            }))
            .pipe(pug())
            .pipe(htmlBeautify(options.htmlBeautify))
            .pipe(htmlmin(options.htmlmin))
            .pipe(gulp.dest(options.pug.release))
    })

    gulp.task('watch:pug', () => {
        watch(options.pug.files, () => {
            gulp.start('pug')
        })
    })
}