
import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.scss'

export default class Unit1 extends Component{

  static externalClasses = ['custom-class']

  static propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string
  }

  static defaultProps = {
    name: '',
    desc: ''
  }


  config = {
  }

  render(){
    const {name} = this.props
    return (
      <View className='unit1 flex-column-start-start'>
        <Text className='test1'>我是组件{name}</Text>
        <Text className='custom-class'>我的样式名是外部传进来的</Text>
      </View>
    )
  }
}
