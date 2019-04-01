
import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.scss'

export default class DemoList extends Component{

  static propTypes = {
    list: PropTypes.array
  }

  static defaultProps = {
    list: []
  }

  gotoSubPage = o => {
    const params = `?title=${o.name}`
    Taro.navigateTo({
      url: o.url + params
    })
  }

  render(){
    const { list } = this.props
    return (
      <View className="demolist-box flex-column-start-center">
        {
          list.map((o, i) => {
            return (
              <View
                  key={i}
                  className="demo-item"
                  onClick={this.gotoSubPage.bind(this, o)}
                  >
                  <Text className="demo-text">{o.name}</Text>
              </View>
            )
          })
        }
      </View>
    )
  }
}
