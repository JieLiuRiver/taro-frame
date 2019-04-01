### 项目设置
- 需要设置关闭 ES6 转 ES5 功能，开启可能报错
- 需要设置关闭上传代码时样式自动补全，开启可能报错
- 需要设置关闭代码压缩上传，开启可能报错

### 项目目录结构

    ├── dist                   编译结果目录
    ├── config                 配置目录
    |   ├── dev.js             开发时配置
    |   ├── index.js           默认配置
    |   └── prod.js            打包时配置
    ├── src                    源码目录
    |   ├── pages              页面文件目录
    |   |   ├── index          index 页面目录
    |   |   |   ├── index.js   index 页面逻辑
    |   |   |   └── index.css  index 页面样式
    |   ├── app.css            项目总通用样式
    |   └── app.js             项目入口文件
    └── package.json
    
    
### 全局配置

[戳我👇](https://github.com/NervJS/taro/edit/master/docs/tutorial.md)


- `pages`：数组的第一项代表小程序的初始页面（首页）

- `debug`： 可以在开发者工具中开启 debug 模式，在开发者工具的控制台面板，调试信息以 info 的形式给出，其信息有 Page 的注册，页面路由，数据更新，事件触发等。可以帮助开发者快速定位一些常见的问题。

- `subPackages`：启用分包加载时，声明项目分包结构

- `usingComponents`： 在此处声明的自定义组件视为全局自定义组件，在小程序内的页面或自定义组件中可以直接使用而无需再声明

-  `permission`： 微信小程序接口权限相关设置。字段类型为 Object

  ```
  class App extends Component {
    // 项目配置
    config = {
      pages: [
        'pages/index/index',
        'pages/logs/logs'
      ],
      permission: {
        'scope.userLocation': {
          desc: '你的位置信息将用于小程序位置接口的效果展示'
        }
      }
    }
    ...
  }
  ```

> `Taro.getApp(Object)`： 可以用来获取到程序 App 实例

### 生命周期

- `componentWillMount()`： 监听程序初始化，初始化完成时触发（全局只触发一次），在此生命周期中通过 this.$router.params，可以访问到程序初始化参数

  ```
  对应 onLaunch
  this.$router.params = {
    path,  // 路径
    scene, // 场景值[https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html]
    query,  //  query 参数
    shareTicket, // 转发信息
    referrerInfo //来源信息。从另一个小程序、公众号或 App 进入小程序时返回
  }
  ```
  
- `componentDidMount()`：  监听程序初始化，初始化完成时触发（全局只触发一次），在此生命周期中也可以通过 this.$router.params
  
  
- `componentDidShow()`： 程序启动，或从后台进入前台显示时触发，微信小程序中也可以使用 Taro.onAppShow 绑定监听。在此生命周期中通过 this.$router.params，可以访问到程序初始化参数

- `componentDidHide()`： 程序从前台进入后台时触发，微信小程序中也可以使用 Taro.onAppHide 绑定监听

- `componentDidCatchError()`： 程序发生脚本错误或 API 调用报错时触发，微信小程序中也可以使用 Taro.onError 绑定监听

- `componentDidNotFound()`：程序要打开的页面不存在时触发，微信小程序中也可以使用 Taro.onPageNotFound 绑定监听

- `shouldComponentUpdate(nextProps, nextState)` 页面是否需要更新，返回 false 不继续更新，否则继续走更新流程

- `componentWillUpdate(nextProps, nextState)` 页面即将更新

- `componentDidUpdate(prevProps, prevState)` 页面更新完成

- `componentWillUnmount()` 页面卸载时触发，如 redirectTo 或 navigateBack 到其他页面时

### 入口文件 `render` 方法
不要在入口文件中的 `render` 方法里写逻辑及引用其他页面、组件


### 页面配置
  ```
  export default class Index extends Component {
    config = {
      navigationBarBackgroundColor: '#ffffff',
      navigationBarTextStyle: 'black',
      navigationBarTitleText: '首页',
      backgroundColor: '#eeeeee',
      backgroundTextStyle: 'light'
    }
  
    render () {
      return (
        <View className='index'>
          <Text>1</Text>
        </View>
      )
    }
  }
  ```

`usingComponents` 一般不需要配置，只有在需要与引用原生小程序组件的时候才需要配置

  
 
### 监听用户下拉刷新事件

- 需要在全局配置的 window 选项中或页面配置中开启 enablePullDownRefresh
- 可以通过 Taro.startPullDownRefresh 触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
- 当处理完数据刷新后，Taro.stopPullDownRefresh 可以停止当前页面的下拉刷新


```
onPullDownRefresh(){}
```

### 监听用户上拉触底事件
- 可以在全局配置的 window 选项中或页面配置中设置触发距离 onReachBottomDistance
- 在触发距离内滑动期间，本事件只会被触发一次
```
onReachBottom() {}

```


### 监听用户滑动页面事件

请只在需要的时候才在 page 中定义此方法，不要定义空方法。以减少不必要的事件派发对渲染层-逻辑层通信的影响。注意：请避免在 onPageScroll 中过于频繁的执行 this.setState() 等引起逻辑层-渲染层通信的操作。尤其是每次传输大量数据，会影响通信耗时

```
onPageScroll(e) {
  console.log(e.scrollTop)
}
```

### 监听用户点击页面内转发按钮

- （Button 组件 openType='share'）或右上角菜单“转发”按钮的行为，并自定义转发内容
- 只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮

```
onShareAppMessage({from, target, webViewUrl}) {
  // from - button：页面内转发按钮；menu：右上角转发菜单
  // target -  如果 from 值是 button，则 target 是触发这次转发事件的 button，否则为 undefined
  // webViewUrl  - 页面中包含 组件时，返回当前 的url
  
  return {
    path, // 转发路径： 当前页面 path ，必须是以 / 开头的完整路径
    title, // 标题
    imageUrl // 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持 PNG 及 JPG 。显示图片长宽比是 5:4
  }
}
```


### 小程序屏幕旋转时触发

[戳我👇](https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html#%E5%9C%A8%E6%89%8B%E6%9C%BA%E4%B8%8A%E5%90%AF%E7%94%A8%E5%B1%8F%E5%B9%95%E6%97%8B%E8%BD%AC%E6%94%AF%E6%8C%81)
```
onResize(e) {}
```

### 点击 tab 时触发

```
onTabItemTap({index, pagePath, text}){
  /**
  *  index - 序号
  *  pagePath - 路径
  *  text - 按钮文字
  */
}
```
