
import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import PropTypes from 'prop-types'
import { connect } from '@tarojs/redux';
import './index.scss'


@connect(({practice}) => ({
  ...practice,
}))
export default class Unit2 extends Component{

  static externalClasses = ['custom-class']

  static propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string
  }

  static defaultProps = {
    name: '',
    desc: ''
  }

  static change () {
    console.log('chagne')
  } 


  config = {
  }

  render(){
    return (
      <View></View>
    )
  }
}
