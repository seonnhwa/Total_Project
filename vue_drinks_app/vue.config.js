const { VUE_APP_SERVER } = process.env
module.exports = {
  transpileDependencies: true,
  proxy: {
    '/serverApi': {
      target: VUE_APP_SERVER,
      changeOrigin: true,
      pathRewrite: {
        '^/serverApi': 'http://192.168.0.62:3001'
      }
    }
  }
}
