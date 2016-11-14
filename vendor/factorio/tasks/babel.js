const gulp = require('gulp'),
    watch = require('gulp-watch'),
    logger = require('gulp-logger'),
    changed = require('gulp-changed'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    mode = require('gulp-mode')()

module.exports = (options) => {
    gulp.task('babel', () => {
        return gulp.src(options.babel.globs)
            .pipe(changed(options.babel.release))
            .pipe(plumber())
            .pipe(logger({
                dest: options.babel.release,
                extname: '.js',
                showChange: true
            }))
            .pipe(mode['development'](sourcemaps.init()))
            .pipe(babel({
                presets: ['es2015', 'stage-1']
            }))
            .pipe(mode['production'](uglify()))
            .pipe(mode['development'](sourcemaps.write()))
            .pipe(gulp.dest(options.babel.release))
    })

    gulp.task('watch:babel', () => {
        watch(options.babel.files, () => {
            gulp.start('babel')
        })
    })
}