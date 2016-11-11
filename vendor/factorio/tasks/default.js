const gulp = require('gulp')

module.exports = () => {
    gulp.task('default', ['release'], () => {
        gulp.start(['watch', 'serve'])
    })
}