import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({request}) => ({
  ...request,
}))
export default class Request extends Component {
  config = {
    navigationBarTitleText: 'request',
  };

  componentDidMount = () => {
    this.props.dispatch({
        type: 'request/demo'
      })
  };

  render() {
    const {goodsCategoryList} = this.props
    return (
      <View className="request-page">
        {
          goodsCategoryList.map((o, i) => (
            <View key={i} className="flex-column-center item">
              <Image
                mode="widthFix"
                className="pic"
                src={o.mainImage}
              />
              <Text className="name">{o.name}</Text>
            </View>
          ))
        }
      </View>
    )
  }
}
