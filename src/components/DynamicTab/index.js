
import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text, ScrollView} from '@tarojs/components'
import PropTypes from 'prop-types'
import { connect } from '@tarojs/redux';
import './index.scss'
import DynamicTab from "../../pages/practice";

const iconPulldown = 'data:image/png;base64,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'


@connect(({practice}) => ({
  ...practice,
}))
export default class Search extends Component{

  constructor(props){
    super(props)
    this.state = {
      listWidth: '9999px',
      autoAdjustDistance: 0
    }
    this.scrollLeft = 0
  }

  static propTypes = {
    tabs: PropTypes.array,
    source: PropTypes.array,
    curTabIdx: PropTypes.number,
  }

  static defaultProps = {
    source: [],
    tabs: [],
    curTabIdx: 0
  }

  componentWillMount() {
    this.props.dispatch({
      type: 'practice/tabItems',
      id: 1
    })
  }

  rehandleListWidth() {
    this.setState({
      listWidth: '9999px'
    }, () => {
      this.calcWidth()
    })
  }

  componentDidMount() {
    this.calcWidth()
  }

  calcWidth() {
    const that = this
    setTimeout(() => {
      const query = Taro.createSelectorQuery().in(this.$scope);
      query
        .select('.tab-list-inner')
        .boundingClientRect(rect => {
          if (!!rect) {
            that.setState({listWidth: rect.width + 'PX'})
          }
        })
        .exec()
    }, 200)
  }

  onPressTabItem(o, i, e) {
    this.props
      .dispatch({
        type: 'practice/save',
        payload: {
          dynamicTabIdx : i
        }
      })
    const clientX = e.changedTouches[0].clientX
    const half = 375 / 2
    if (clientX > half) {
      this.setState({
        autoAdjustDistance: this.scrollLeft + clientX - half
      })
    } else {
      this.setState({
        autoAdjustDistance: Math.max(this.scrollLeft - (half - clientX), 0)
      })
    }
  }

  onScroll(e) {
    this.scrollLeft = e.detail.scrollLeft
  }

  onPressSwitchType() {
    this.props
      .dispatch({
        type: 'practice/save',
        payload: {
          tabTypeModalVisible : true
        }
      })
  }


  render(){
    const {tabs, dynamicTabIdx = 0} = this.props
    const {listWidth, autoAdjustDistance} = this.state
    const listWidthStyle = {
      width: listWidth
    }

    return (
      <View className="tab-box">
        <View className={'pull-down flex-column-start-center'} onClick={this.onPressSwitchType}>
          <Image src={iconPulldown} className={'icon-pulldown'}/>
        </View>
        <ScrollView
          scrollX={true}
          className={'scroll-box flex-row-start-center'}
          scrollLeft={autoAdjustDistance}
          scrollWithAnimation
          onScroll={this.onScroll}>
          <View className={'flex-row-start-center tab-list'} style={listWidthStyle}>
            <View className={'flex-row-start-center tab-list-inner'}>
              {
                tabs.map((tab, tabIdx) => (
                  <View className={'flex-column-start-center tab-item'} key={tab.id} onClick={this.onPressTabItem.bind(this, tab, tabIdx)}>
                    <View className={`item-label ${dynamicTabIdx == tabIdx ? 'orange' : ''}`}>{tab.label}</View>
                    <View className={`line ${dynamicTabIdx == tabIdx ? 'bg-orange' : ''}`}></View>
                  </View>
                ))
              }
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
