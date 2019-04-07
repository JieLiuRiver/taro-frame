module.exports = {
  // 设置一些环境变量
  // 区分预览、打包来做些不同的操作
  // process.env.NODE_ENV === 'development' 来判断环境。
  env: {
    NODE_ENV: '"development"'
  },
  // 用来配置一些全局变量供代码中进行使
  defineConstants: {
  },
  weapp: {},
  h5: {}
}
