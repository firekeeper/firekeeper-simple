const gulp = require('gulp')

module.exports = () => {
    gulp.task('watch', [
        'watch:html',
        'watch:pug'
    ])
}