
import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.scss'

export default class Demo1 extends Component{

  config = {
    usingComponents: {
      "to-top": "../Native/Demo2/index"
    }
  }

  render(){
    return (
      <View className="demolist-box flex-column-start-center flex-column-center">
        <Text>我是Taro定义的组件</Text>
        <Text>回到顶部是嵌到Taro组件内的原生组件</Text>
        <to-top />
      </View>
    )
  }
}
