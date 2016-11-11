const gulp = require('gulp')

module.exports = (root) => {

    const options = {
        dir: {
            root: root,
            release: `${root}/release`
        }
    }

    gulp.task('default', () => {
    })

    require('./tasks/serve')(options)

}