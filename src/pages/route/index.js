import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({route}) => ({
  ...route,
}))
export default class Route extends Component {
  config = {
    navigationBarTitleText: 'route',
  };

  componentDidMount = () => {

  };

  onClick = (way, url) => {
    Taro[way]({
      url
    }).then(res => {
      console.log('res', res)
    })
  }

  render() {
    return (
      <View className="route-page flex-column-center">
        <View className="way-wrap" onClick={this.onClick.bind(this, 'navigateTo', '/pages/todolist/index')}>
          <Text className="way-text">NavigateTo</Text>
        </View>
        <View className="way-wrap" onClick={this.onClick.bind(this, 'redirectTo', '/pages/todolist/index')}>
          <Text className="way-text">RedirectTo</Text>
        </View>
        <View className="way-wrap" onClick={this.onClick.bind(this, 'switchTab', '/pages/index/index')}>
          <Text className="way-text">SwitchTab</Text>
        </View>
        <View className="way-wrap" onClick={this.onClick.bind(this, 'reLaunch', '/pages/todolist/index')}>
          <Text className="way-text">ReLaunch</Text>
        </View>
        <View>
            <Text>当前的页面栈层数：{Taro.getCurrentPages().length}</Text>
        </View>
      </View>
    )
  }
}
