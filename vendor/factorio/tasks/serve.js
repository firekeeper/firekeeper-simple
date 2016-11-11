const gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    serveIndex = require('serve-index'),
    connectLogger = require('connect-logger'),
    connectHistoryApiFallback = require('connect-history-api-fallback')

module.exports = (options) => {
    gulp.task('serve', () => {
        const files = [`${options.release}/**/*`]
        browserSync.init(files, {
            open: false,
            // 设置是否启用网络环境
            online: true,
            // 设置是否开启隧道
            tunnel: false,
            // 设置是否开启 https
            https: false,
            // 设置是否在浏览器端显示通知
            notify: false,
            // 设置是否在重启服务后刷新浏览器
            reloadOnRestart: true,
            // 设置是否输出文件变动信息
            logFileChanges: false,
            server: {
                baseDir: options.release
            },
            middleware: [
                // 实现浏览器展示文件目录
                serveIndex(options.release, {
                    icons: true
                }),
                // 输出连接信息
                connectLogger(),
                connectHistoryApiFallback()
            ],
            snippetOptions: {
                rule: {
                    match: /<\/head>/i,
                    fn: function(snippet, match) {
                        return `${match}${snippet}`
                    }
                }
            }
        })
    })
}