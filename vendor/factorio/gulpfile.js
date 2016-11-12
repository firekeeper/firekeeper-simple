module.exports = (root) => {
    // 开发目录
    const dev = `${root}/app`
    // 资源目录
    const resource = `${dev}/resource`
    // 发布目录
    const release = `${root}/release`
    // 配置
    const options = {
        dev: dev,
        root: root,
        release: release,
        html: {
            dir: `${dev}/view`,
            files: `${dev}/view/**/*.html`,
            globs: [`${dev}/view/**/*.html`, `!${dev}/view/**/_*.html`],
            release: `${release}/view`,
            extname: '.html'
        },
        pug: {
            dir: `${dev}/view`,
            files: `${dev}/view/**/*.pug`,
            globs: [`${dev}/view/**/*.pug`, `!${dev}/view/**/_*.html`],
            release: `${release}/view`,
            extname: '.pug'
        },
        css: {
            dir: `${resource}/style`,
            files: `${resource}/style/**/*.css`,
            globs: [`${resource}/style/**/*.css`, `!${resource}/style/**/_*.css`],
            release: `${release}/resource/style`,
            extname: '.css'
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
    // 默认任务
    require('./tasks/default')(options)
    // 监听文件变化
    require('./tasks/watch')(options)
    // 清理发布目录
    require('./tasks/clean')(options)
    // 打包文件
    require('./tasks/release')(options)

    // 静态服务器
    require('./tasks/serve')(options)

    // 处理 html 文件
    require('./tasks/html')(options)
    // 处理 pug 文件
    require('./tasks/pug')(options)
    // 处理 css 文件
    require('./tasks/css')(options)
}