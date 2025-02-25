module.exports = {
  apps: [
    {
      name: 'nuxt-app', // 项目名称
      exec_mode: 'cluster',
      instances: 'max',
      script: './output/server/index.mjs', // 开始的脚本路径
      env: {
        'PORT': 3000, // 端口号
        'NODE_ENV': 'development' // 生产环境
      }
    }
  ]
}
