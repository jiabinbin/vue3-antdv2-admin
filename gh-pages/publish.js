/**
 *
 * author: jiabinbin
 * Email: 425605679@qq.com
 * Desc:
 * version: 1.0.0
 */
var ghpages = require('gh-pages')

ghpages.publish('../dist', err => {
  console.log(err)
})
