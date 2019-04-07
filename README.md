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


##  JSX支持程度

#### 1. 不能在自定义组件中写 children (taro/custom-component-children)

在 Nerv/React 中，自定义组件嵌套实际上也是通过 props 来实现的，只是 `children` 是一个特殊的 prop 。而对于 Taro，文档已阐述过不能通过 props 来传递 JSX 元素。

更多详情请查看文档 [JSX 简介](https://nervjs.github.io/taro/jsx.html)。


#### 规则详情

以下代码会被 ESLint 提示警告，同时在 Taro（小程序端）也不会有效：

```javascript
<CustomComponent>test</CustomComponent>

<CustomComponent>{'test'}</CustomComponent>

<CustomComponent>
  <Other />
</CustomComponent>

<Typo>{}</Typo>
```

以下代码不会被警告，也应当在 Taro 任意端中能够运行：

```javascript
<CustomComponent />

<CustomComponent> </CustomComponent>

<ScrollView>test</ScrollView>

<View>test</View>

<View>
  <CustomComponent />
</View>
```

#### 解决方案

请查看文档 [JSX 简介](https://nervjs.github.io/taro/jsx.html)。

该特性可能会在下一个 Major 版本的 Taro 中得到支持。


#### 2. 不能在包含 JSX 元素的 map 循环中使用 if 表达式(taro/if-statement-in-map-loop)

#### 规则详情

以下代码会被 ESLint 提示警告，同时在 Taro（小程序端）也不会有效：

```javascript
numbers.map((number) => {
  let element = null
  const isOdd = number % 2
  if (isOdd) {
    element = <Custom />
  }
  return element
})
```

以下代码不会被警告，也应当在 Taro 任意端中能够运行：

```javascript
numbers.map((number) => {
  let isOdd = false
  if (number % 2) {
    isOdd = true
  }
  return isOdd && <Custom />
})
```

#### 解决方案

尽量在 map 循环中使用条件表达式或逻辑表达式。

```javascript
numbers.map((number) => {
  const isOdd = number % 2
  return isOdd ? <Custom /> : null
})

numbers.map((number) => {
  const isOdd = number % 2
  return isOdd && <Custom />
})
```

当测试用例和线上项目都检测通过时，Taro 将很快（下一个 Minor 版本）支持这一特性。

####  3. 不能使用 Array#map 之外的方法操作 JSX 数组 (taro/manipulate-jsx-as-array)

Taro 在小程序端实际上把 JSX 转换成了字符串模板，而一个原生 JSX 表达式实际上是一个 React/Nerv 元素(react-element)的构造器，因此在原生 JSX 中你可以随意地一组 React 元素进行操作。但在 Taro 中你只能使用 `map` 方法，Taro 转换成小程序中 `wx:for`。

#### 规则详情

以下代码会被 ESLint 提示警告，同时在 Taro（小程序端）也不会有效：

```javascript
test.push(<View />)

numbers.forEach(numbers => {
  if (someCase) {
    a = <View />
  }
})

test.shift(<View />)

components.find(component => {
  return component === <View />
})

components.some(component => component.constructor.__proto__ === <View />.constructor)
```

以下代码不会被警告，也应当在 Taro 任意端中能够运行：

```javascript
numbers.filter(Boolean).map((number) => {
  const element = <View />
  return <View />
})
```

#### 解决方案

先处理好需要遍历的数组，然后再用处理好的数组调用 `map` 方法。

```javascript
numbers.filter(isOdd).map((number) => <View />)

for (let index = 0; index < array.length; index++) {
  // do you thing with array
}

const element = array.map(item => {
  return <View />
})
```

除非微信小程序开放更多能力，目前看不到能支持该特性的任何可能性。



#### 4. 不能在 JSX 参数中使用匿名函数(taro/no-anonymous-function-in-props)

详情请看文档 [事件处理](https://nervjs.github.io/taro/event.html)。

#### 规则详情

以下代码会被 ESLint 提示警告，同时在 Taro（小程序端）也不会有效：

```javascript
<View onClick={() => this.handleClick()} />

<View onClick={(e) => this.handleClick(e)} />

<View onClick={() => ({})} />

<View onClick={function () {}} />

<View onClick={function (e) {this.handleClick(e)}} />
```

以下代码不会被警告，也应当在 Taro 任意端中能够运行：

```javascript
<View onClick={this.hanldeClick} />

<View onClick={this.props.hanldeClick} />

<View onClick={this.hanldeClick.bind(this)} />

<View onClick={this.props.hanldeClick.bind(this)} />
```

#### 解决方案

使用 [`bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) 或 [类参数](https://babeljs.io/docs/plugins/transform-class-properties/)绑定函数。

```javascript
<View onClick={this.props.hanldeClick.bind(this)} />
```

当测试用例和线上项目都检测通过时，Taro 将很快（下一个 Minor 版本）支持这一特性。


####  5. 暂不支持在 render() 之外的方法定义 JSX

由于微信小程序的 `template` 不能动态传值和传入函数，Taro 暂时也没办法支持在类方法中定义 JSX。


#### 规则详情

以下代码会被 ESLint 提示警告，同时在 Taro（小程序端）也不会有效：

```javascript
class App extends Component {
  _render() {
    return <View />
  }
}

class App extends Component {
  renderHeader(showHeader) {
    return showHeader && <Header />
  }
}

class App extends Component {
  renderHeader = (showHeader) => {
    return showHeader& & <Header />
  }
}
```

#### 解决方案

在 `render` 方法中定义。

```javascript
class App extends Component {

  render () {
    const { showHeader, showMain } = this.state
    const header = showHeader && <Header />
    const main = showMain && <Main />
    return (
      <View>
        {header}
        {main}
      </View>
    )
  }
}
```

当测试用例和线上项目都检测通过时，Taro 将很快（下一个 Minor 版本）支持这一特性。


#### 6. 不允许在 JSX 参数(props)中传入 JSX 元素(taro/no-jsx-in-props)

由于微信小程序内置的组件化的系统不能通过属性（props） 传函数，而 props 传递函数可以说 React 体系的根基之一，我们只能自己实现了一套组件化系统。而自制的组件化系统则不能使用内置组件化的 slot 功能。两权相害取其轻，我们暂时只能不支持该功能。


#### 规则详情

以下代码会被 ESLint 提示警告，同时在 Taro（小程序端）也不会有效：

```javascript
<Custom child={<View />} />

<Custom child={() => <View />} />

<Custom child={function () { <View /> }} />

<Custom child={ary.map(a => <View />)} />
```

#### 解决方案

通过 props 传值在 JSX 模板中预先判定显示内容。

该特性可能会在下一个 Major 版本的 Taro 中得到支持。



#### 7. 不能在 JSX 参数中使用对象展开符(Object spread)(taro/no-spread-in-props)

微信小程序组件要求每一个传入组件的参数都必须预先设定好，而对象展开符则是动态传入不固定数量的参数。所以 Taro 没有办法支持该功能。

#### 规则详情

以下代码会被 ESLint 提示警告，同时在 Taro（小程序端）也不会有效：

```javascript
<View {...this.props} />

<View {...props} />

<Custom {...props} />
```

以下代码不会被警告，也应当在 Taro 任意端中能够运行：

```javascript
const { id, ...rest } = obj

const [ head, ...tail]  = array

const obj = { id, ...rest }
```

#### 解决方案

除非微信小程序开放更多能力，目前看不到能支持该特性的可能性。



#### 8. 不支持无状态组件（stateless component）(taro/no-stateless-component)

由于微信的 `template` 能力有限，不支持动态传值和函数，Taro 暂时只支持一个文件只定义一个组件。为了避免开发者疑惑，暂时不支持定义 stateless component。

#### 规则详情

以下代码会被 ESLint 提示警告，同时在 Taro（小程序端）也不会有效：

```javascript
function Test () {
  return <View />
}

function Test (ary) {
  return ary.map(() => <View />)
}

const Test = () => {
  return <View />
}

const Test = function () {
  return <View />
}

```

以下代码不会被警告，也应当在 Taro 任意端中能够运行：

```javascript
class App extends Component {
  render () {
    return (
      <View />
    )
  }
}
```

#### 解决方案

使用 `class` 定义组件。

该特性可能会在下一个 Major 版本的 Taro 中得到支持。




### 组件样式说明

微信小程序的自定义组件样式默认是不能受外部样式影响的，例如在页面中引用了一个自定义组件，在页面样式中直接写自定义组件元素的样式是无法生效的。这一点，在 Taro 中也是一样，而这也是与大家认知的传统 Web 开发不太一样。



### 组件传递函数属性名以 on 开头

在 Taro 中，父组件要往子组件传递函数，属性名必须以 on 开头

```javascript
// 调用 Custom 组件，传入 handleEvent 函数，属性名为 onTrigger
class Parent extends Component {

  handleEvent () {

  }

  render () {
    return (
      <Custom onTrigger={this.handleEvent}></Custom>
    )
  }
}
```

这是因为，微信小程序端组件化是不能直接传递函数类型给子组件的，在 Taro 中是借助组件的事件机制来实现这一特性，而小程序中传入事件的时候属性名写法为 bindmyevent 或者 bind:myevent

所以 Taro 中约定组件传递函数属性名以 on 开头，同时这也和内置组件的事件绑定写法保持一致了。


### 小程序端不要在组件中打印传入的函数

前面已经提到小程序端的组件传入函数的原理，所以在小程序端不要在组件中打印传入的函数，因为拿不到结果，但是 this.props.onXxx && this.props.onXxx() 这种判断函数是否传入来进行调用的写法是完全支持的。

### 小程序端不要将在模板中用到的数据设置为 undefined

由于小程序不支持将 data 中任何一项的 value 设为 undefined ，在 setState 的时候也请避免这么用。你可以使用 null 来替代

### 小程序端不要在组件中打印 this.props.children

在微信小程序端是通过 <slot /> 来实现往自定义组件中传入元素的，而 Taro 利用 this.props.children 在编译时实现了这一功能， this.props.children 会直接被编译成 <slot /> 标签，所以它在小程序端属于语法糖的存在，请不要在组件中打印它。

### 支持 props 传入 JSX

支持 props 传入 JSX，但是元素传入 JSX 的属性名必须以 render 开头

例如，子组件写法

```javascript

class Dialog extends Component {
  render () {
    return (
      <View className='dialog'>
        <View className='header'>
          {this.props.renderHeader}
        </View>
        <View className='body'>
          {this.props.children}
        </View>
        <View className='footer'>
          {this.props.renderFooter}
        </View>
      </View>
    )
  }
}
```

父组件调用子组件是传入 JSX

```javascript
class App extends Component {
  render () {
    return (
      <View className='container'>
        <Dialog
          renderHeader={
            <View className='welcome-message'>Welcome!</View>
          }
          renderFooter={
            <Button className='close'>Close</Button>
          }
        >
          <View className="dialog-message">
            Thank you for using Taro.
          </View>
        </Dialog>
      </View>
    )
  }
}
```

### 环境变量 process.env 的使用

不要以解构的方式来获取通过 env 配置的 process.env 环境变量，请直接以完整书写的方式 process.env.NODE_ENV 来进行使用

```javascript
// 错误写法，不支持
const { NODE_ENV = 'development' } = process.env
if (NODE_ENV === 'development') {
  ...
}

// 正确写法
if (process.env.NODE_ENV === 'development') {

}
```

### 使用 this.$componentType 来判断当前 Taro.Component 是页面还是组件

this.$componentType 可能取值分别为 PAGE 和 COMPONENT，开发者可以根据此变量的取值分别采取不同逻辑。


### 全局变量

在 Taro 中推荐使用 Redux 来进行全局变量的管理，但是对于一些小型的应用， Redux 就可能显得比较重了，这时候如果想使用全局变量，推荐如下使用。

新增一个自行命名的 JS 文件，例如 global_data.js，示例代码如下

```
const globalData = {}

export function set (key, val) {
  globalData[key] = val
}

export function get (key) {
  return globalData[key]
}
```

随后就可以在任意位置进行使用啦

```
import { set as setGlobalData, get as getGlobalData } from './path/name/global_data'

setGlobalData('test', 1)

getGlobalData('test')
```


> 不能把 this.props.children 分解为变量再使用

> 不要再setState的时候调用`this.state.num`

#### 配置项
编译配置存放于项目根目录下 config 目录中，包含三个文件

```javascript
index.js 是通用配置
dev.js 是项目预览时的配置
prod.js 是项目打包时的配置
```

