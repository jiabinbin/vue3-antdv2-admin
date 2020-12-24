/**
 *
 * author: jiabinbin
 * Email: 425605679@qq.com
 * Desc:
 * version: 1.0.0
 */
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue3-antdv2-admin/'
    : '/',
  devServer: {
    open: true,
    port: 3000
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'menu-collapsed-width': '48px',
          'layout-header-height': '48px'
        },
        javascriptEnabled: true
      }
    }
  },
  // runtimeCompiler: true, // 运行时编译，默认为false。如需要在使用template: `xxx` 设为true.但会多10kb左右
  parallel: require('os').cpus().length > 1 // 构建时开启多进程处理babel编译
}
