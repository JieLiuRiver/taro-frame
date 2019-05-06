import Taro, { Component, Events } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import Search from '../../components/Search'
import DynamicTab from '../../components/DynamicTab'
import TabTypeModal from '../../components/TabTypeModal'
import Filter from '../../components/Filter'
import './index.scss';

const eventsInstance = new Events()

@connect(({practice}) => ({
  ...practice,
}))
export default class Practice extends Component {
  config = {
    navigationBarTitleText: '美团专送',
  };

  componentWillMount = () => {
    this.props.dispatch({
      type: 'practice/parentTabDatas'
    })
    eventsInstance.on('changeTabType', () => {
      this.dynamicTab && this.dynamicTab.rehandleListWidth()
    })
  };

  componentWillUnmount() {
    eventsInstance.off('changeTabType')
  }

  onTabTypeModalSubmit() {
    eventsInstance.trigger('changeTabType')
  }

  render() {
    return (
      <View className="practice-page">
        {/* 搜索 */}
        <Search />
        {/* 选项卡 */}
        <DynamicTab
          ref={ref => this.dynamicTab = ref}
        />
        {/* 过滤 */}
        <Filter />
        {/* 分类选择 */}
        <TabTypeModal
          onSubmit={this.onTabTypeModalSubmit}
        />
      </View>
    )
  }
}
