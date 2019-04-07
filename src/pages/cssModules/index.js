import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import styles from '../../styles/test.module.scss'
import './index.scss';

@connect(({cssModules}) => ({
  ...cssModules,
}))
export default class Cssmodules extends Component {
  config = {
    navigationBarTitleText: 'cssModules',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="cssModules-page">
        <View className={styles.test + ' flex-row-between-center'}>
          <Text className={styles.txt}>A</Text>
          <Text className={styles.txt}>B</Text>
        </View>
      </View>
    )
  }
}
