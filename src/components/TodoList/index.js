
import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.scss'

export default class TodoList extends Component{

  static propTypes = {
    list: PropTypes.array
  }

  static defaultProps = {
    list: []
  }

  componentWillReceiveProps(state) {
  }

  onClick = idx => {
    this.props.onClick && this.props.onClick(idx)
  }

  onDelete = (idx, event) => {
    event.stopPropagation()
    this.props.onDelete && this.props.onDelete(idx)
  }

  render(){
    const { list, title } = this.props
    return (
      <View className="doinglist-box flex-column-start-start">
        <View className="title-box flex-row-between-center">
          <Text className="title-text">{title}</Text>
          <Text>{list.length}</Text>
        </View>
        {
          list.map((o, i) => (
            <View key={i} className={['flex-row-between-center item', title === '正在进行' ? 'doing-item' : 'done-item']}>
              <View
                className={['flex-row-start-center item-left']}
                onClick={this.onClick.bind(this, i)}>
                <View class="flex-row-start">
                  <Text className="item-label">{o}</Text>
                </View>
              </View>
              <View className="del-btn-wrap flex-row-center" onClick={this.onDelete.bind(this,i)}>
                <Text className="del-btn">删除</Text>
              </View>
            </View>
          ))
        }
      </View>
    )
  }
}
