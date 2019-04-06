import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import DemoList from '../../components/DemoList'
import './index.scss'


@connect(({index}) => ({
  ...index
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '文档'
  }

  componentWillMount () {}

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {demolist} = this.props
    return (
      <View className='index-container'>
        <View className='title-box flex-row-center'>
          <Text className='title'>Taro + Dva</Text>
        </View>
        <DemoList
          list={demolist}
        />
      </View>
    )
  }
}


export default Index;
