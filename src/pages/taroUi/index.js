import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtCalendar } from "taro-ui"
import './index.scss';

@connect(({taroUi}) => ({
  ...taroUi,
}))
export default class TaroUi extends Component {
  config = {
    navigationBarTitleText: 'taro-ui',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="taro-ui-page">
        <AtCalendar />
      </View>
    )
  }
}
