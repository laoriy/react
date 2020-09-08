/*
 * @Author: liuruijun
 * @Date: 2020-09-08 09:46:21
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-08 11:37:07
 * @Description: file content
 */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app, target) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: target,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '' // rewrite path
      }
    })
  )
}
