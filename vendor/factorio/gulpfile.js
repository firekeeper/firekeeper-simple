const gulp = require('gulp')

module.exports = (root) => {
    const dev = `${root}/app`
    const release = `${root}/release`

    const options = {
        dev: dev,
        root: root,
        release: release,
        html: {
            dir: `${dev}/view`,
            files: `${dev}/view/**/*.html`,
            globs: [`${dev}/view/**/*.html`, `!${dev}/view/**/_*.html`],
            release: `${release}/view`
        },
        pug: {
            dir: `${dev}/view`,
            files: `${dev}/view/**/*.pug`,
            globs: [`${dev}/view/**/*.pug`, `!${dev}/view/**/_*.html`],
            release: `${release}/view`
        },
        htmlBeautify: {
            // 设置缩进宽度
            indent_size: 4,
            // 设置缩进的形式 空格或 tab
            indent_char: ' ',
            // 设置 head body 标签是否缩进
            indent_inner_html: false,
            // 设置哪些标签前会增加空行
            extra_liners: [],
            // 设置是否保留换行符
            preserve_newlines: true,
            // 不应该重新格式化的标签列表（默认为内联标签）
            // 该数组为空时，所有标签都会独占一行
            unformatted: []
        },
        htmlmin: {
            // 以 html5 标准输出
            html5: true
        }
    }

    gulp.task('default', () => {
    })

    // 静态服务器
    require('./tasks/serve')(options)
    // 处理 html 文件
    require('./tasks/html')(options)
    // 处理 pug 文件
    require('./tasks/pug')(options)
}