const gulp = require('gulp'),
    watch = require('gulp-watch'),
    changed = require('gulp-changed'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    cssnano = require('gulp-cssnano'),
    plumber = require('gulp-plumber'),
    logger = require('gulp-logger'),
    sass = require('gulp-sass')

module.exports = (options) => {
    gulp.task('sass', () => {
        return gulp.src(options.sass.globs)
            .pipe(changed(options.sass.release, { extension: '.css' }))
            .pipe(plumber())
            .pipe(logger({
                dest: options.sass.release,
                extname: '.css',
                showChange: true
            }))
            .pipe(sourcemaps.init())
            .pipe(sass({
                // 输出的代码格式
                outputStyle: 'expanded',
                // 输出的代码缩进宽度
                indentWidth: 4
            }))
            .pipe(autoprefixer())
            .pipe(cssnano())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(options.sass.release))
    })

    gulp.task('watch:sass', () => {
        watch(options.sass.files, () => {
            gulp.start('sass')
        })
    })
}
