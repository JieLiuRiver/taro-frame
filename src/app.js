import '@tarojs/async-await';
import Taro, { Component } from '@tarojs/taro';
import Index from './pages/index';
import dva from './utils/dva';
import models from './models';
import { Provider } from '@tarojs/redux';
import Towxml from 'towxml';

import './styles/base.scss';

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/request/index',
      'pages/todolist/index',
      'pages/usingComponents/index',
      'pages/route/index',
      'pages/jsx/index'
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '美肌工坊',
      navigationBarTextStyle: 'black',
    },
    debug: true
  };

  componentDidMount() {

  }

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
  );
  }
}

Taro.render(<App />, document.getElementById('app'));
