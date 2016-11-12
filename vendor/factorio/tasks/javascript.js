const gulp = require('gulp'),
    watch = require('gulp-watch'),
    logger = require('gulp-logger'),
    changed = require('gulp-changed'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify')

module.exports = (options) => {
    gulp.task('javascript', () => {
        return gulp.src(options.javascript.globs)
            .pipe(changed(options.javascript.release))
            .pipe(plumber())
            .pipe(logger({
                dest: options.javascript.release,
                extname: '.js',
                showChange: true
            }))
            .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(options.javascript.release))
    })

    gulp.task('watch:javascript', () => {
        watch(options.javascript.files, () => {
            gulp.start('javascript')
        })
    })
}
