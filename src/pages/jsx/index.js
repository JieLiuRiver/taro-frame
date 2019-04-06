import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import Towxml from "towxml";

@connect(({jsx}) => ({
  ...jsx,
}))



export default class Jsx extends Component {
  config = {
    navigationBarTitleText: 'jsx',
  };

  componentDidMount = () => {
    this.towxml = new Towxml()
  };

  render() {
    const { list } = this.props
    return (
      <View className="jsx-page">
        {
          list.map((o, i) => (
            <View key={i}><Text className="word-text">{(i + 1) + '. ' + o.label}</Text></View>
          ))
        }
      </View>
    )
  }
}
