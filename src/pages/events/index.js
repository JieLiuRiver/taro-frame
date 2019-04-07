import Taro, { Component, Events } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

const eventsInstance = new Events()

@connect(({events}) => ({
  ...events,
}))
export default class EventsDemo extends Component {
  config = {
    navigationBarTitleText: 'events',
  };

  componentDidMount = () => {
    eventsInstance.on('overflow', (arg) => {
      // doSth
      console.log('arg', arg)
    })
  };

  onAdd() {
    let {num} = this.props
    num += 1
    if (num >= 5) {
      eventsInstance.trigger('overflow', {num})
      Taro.eventCenter.trigger('overflow', {num})
    }
    this.props
      .dispatch({
        type: 'events/save',
        payload: {
          num
        }
      })
  }

  onCancel() {
    eventsInstance.off('overflow')
    Taro.eventCenter.off('overflow')
    this.props
      .dispatch({
        type: 'events/save',
        payload: {
          status: 0
        }
      })
  }

  render() {
    const {num, status} = this.props
    return (
      <View className="events-page flex-column-center">
        <View className='title'>
          <Text>自定义一个数量超过5的消息事件</Text>
        </View>
        <View className='add' onClick={this.onAdd}>➕1</View>
        <View className='add' onClick={this.onCancel}>{status ? '取消监听这个消息事件' : '已经取消'}</View>
        <View>当前数值：{num}</View>
      </View>
    )
  }
}
