module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      }
    }
  },
  lintOnSave: false,
    devServer: {
        host: '192.168.1.8', // ip
        port: 8081, // 设置端口号
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        proxy:null  //设置代理
    }
}