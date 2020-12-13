/**
 *
 * author: jiabinbin
 * Email: 425605679@qq.com
 * Desc:
 * version: 1.0.0
 */
module.exports = {
  devServer: {
    open: true,
    port: 3000
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 'primary-color': '#1DA57A'
        },
        javascriptEnabled: true
      }
    }
  },
  parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
  chainWebpack: (config) => {
    // config.performance.set('hints', false)
    // config.resolve.alias
    //   .set('@', resolve('src'))
    //   .set('@assets', resolve('src/assets'))
    //   .set('@views', resolve('src/views'))
    //   .set('@com', resolve('src/components'))
  }
}
