const gulp = require('gulp')

module.exports = () => {
    gulp.task('watch', [
        'watch:html',
        'watch:pug',
        'watch:css',
        'watch:less',
        'watch:sass'
    ])
}