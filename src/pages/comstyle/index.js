import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import Unit1 from '../../components/Unit1'
import './index.scss';


@connect(({comstyle}) => ({
  ...comstyle,
}))
export default class Comstyle extends Component {
  config = {
    navigationBarTitleText: 'comstyle',
  };

  componentDidMount = () => {

  };

  render() {
    const inlineStyle = {
      width: Taro.pxTransform(250)
    }
    return (
      <View className="comstyle-page">
        <Text className="test1">组件样式会影响我页面级的样式？</Text>
        <Unit1
          custom-class='test2'
          name='unit1'
          desc='我的样式名是外部传进来的'
        />
        <View style={inlineStyle} className='test3 flex-row-center'>
          <Text>行内样式转换</Text>
        </View>
      </View>
    )
  }
}
