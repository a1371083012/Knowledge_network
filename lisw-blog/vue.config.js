
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    },
  },
  lintOnSave:false, /*关闭语法检查*/
  //开启代理服务器（方式一）
  // devServer: {
  //   proxy: 'http://localhost:8001'
  // }
  //开启代理服务器（方式二）
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8001',
  //       pathRewrite: {'^/api':''},
  //       // ws: true, //用于支持websocket
  //       // changeOrigin: true //用于控制请求头中的host值
  //     },
  //     '/demo': {
  //       target: 'http://localhost:8002',
  //       pathRewrite: {'^/demo':''},
  //     },
  //   }
  // }
})