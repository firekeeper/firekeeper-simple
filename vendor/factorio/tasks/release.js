const gulp = require('gulp')

module.exports = () => {
    gulp.task('release', ['clean'], () => {
        gulp.start([
            'html',
            'pug',
            'css',
            'less'
        ])
    })
}