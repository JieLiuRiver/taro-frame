import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({scope}) => ({
  ...scope,
}))
export default class Scope extends Component {
  config = {
    navigationBarTitleText: 'scope',
  };

  componentDidMount = () => {
    // 当调用一些 API 需要传入小程序的页面或者组件实例时用到
    console.log('小程序原生页面实例：', this.$scope)
    console.log('taro页面实例：', this)
  };

  render() {
    return (
      <View className="scope-page">
        scope
      </View>
    )
  }
}
