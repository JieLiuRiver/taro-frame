import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({event}) => ({
  ...event,
}))
export default class Event extends Component {
  config = {
    navigationBarTitleText: 'event',
  };

  componentDidMount = () => {

  };

  onClickA() {
    console.log('a')
  }

  onClickB(label, e) {
    e.stopPropagation()
    console.log('b')
  }

  render() {
    return (
      <View className="event-page flex-column-center">
        <View className='a flex-row-center' onClick={this.onClickA}>点我</View>
        <View className='a flex-row-center' onClick={this.onClickA}>
          <View className='b flex-row-center' onClick={this.onClickB.bind(this, 'b')}>点我(禁止冒泡)</View>
        </View>
      </View>
    )
  }
}
