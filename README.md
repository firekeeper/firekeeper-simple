# firekeeper-simple

## 更新日志

## 版本：0.0.5

- 增加删除 `JavaScript` 中的 `console` 语句（Production模式）。
- 增加默认后缀 `.html`。
- 增加 `JavaScript` 编译方式，以 `.js` 为后缀不进行编译处理，以 `.babel.js` 为后缀则启用 `es6` 模式。
- 增加合并 `Sass` 文件的功能。
- 修改静态服务器默认路径为 `/release/view`。
- 修复了浏览器不会自动刷新的问题。
- 取消文件变动的日志输出，保持控制台的整洁。

注1：

> 过去的版本中，想要访问项目首页需要输入路径：`/view/index.html`，而现在只需要输入：`/index`，如此一来便可以与服务器路由保持一致，方便对接。

注2：

> 合并 Sass 的功能以文件夹的方式进行管理，无需配置。
>
> 例如， `app/style/bundle/[name]` 文件夹中拥有多个 Sass 文件：`init.sass` `index.sass` `header.sass` `footer.sass`，最终会被编译 - 合并到 `release/resource/style/[name].css`
>
> 以 `_` 下划线开头的文件不会编译。
>
> 所有的文件都会先执行，后合并，保证每个文件之间不会造成全局变量污染。

> 尽可能地避免 bundle 文件夹和外部文件重名，外部文件会覆盖 bundle 文件夹的输出。
