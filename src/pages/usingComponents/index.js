import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import Demo1 from '../../components/Demo1'
import './index.scss';

@connect(({usingComponents}) => ({
  ...usingComponents,
}))
export default class Usingcomponents extends Component {
  config = {
    navigationBarTitleText: 'usingComponents',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="usingComponents-page">
        <Demo1 />
      </View>
    )
  }
}
