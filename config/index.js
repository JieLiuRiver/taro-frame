const config = {
  projectName: 'taro-frame',
  date: '2019-3-28',
  // 用来设置设计稿尺寸
  // Taro 默认会对所有单位进行转换。在 Taro 中书写尺寸按照 1:1 的关系来进行书写，即从设计稿上量的长度 100px，那么尺寸书写就是 100px，当转成微信小程序的时候，尺寸将默认转换为 100rpx
  // 如果你希望部分 px 单位不被转换成 rpx
  // 在 px 单位中增加一个大写字母，例如 Px 或者 PX 这样，则会被转换插件忽略; 或者 头部包含注释/*postcss-pxtransform disable*/文件
  // 默认以 750px 作为换算尺寸标准
  designWidth: 750,
  // 目前 Taro 支持 750、 640 、 828
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  // 源码存放目录
  sourceRoot: 'src',
  // 代码编译后的生产目录
  outputRoot: 'dist',
  // 置一些各个端通用的编译过程配置， babel 配置，JS/CSS 压缩配置等
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-decorators-legacy',
        'transform-class-properties',
        'transform-object-rest-spread'
      ]
    }
  },
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  weapp: {
    compile: {
      // 编译过程中排除不需要经过 Taro 编译的文件，数组类型，写文件路径
      // exclude: ['src/components/ec-canvas/echarts.js']
    },
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        pxtransform: {
          enable: true,
          config: {

          }
        },
        // 小程序端样式引用本地资源内联
        url: {
          enable: true,
          config: {
            limit: 10240 // 设定转换尺寸上限
          }
        },
        // css modules 功能开关与相关配置
        cssModules: {
          enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
