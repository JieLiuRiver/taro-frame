import '@tarojs/async-await';
import Taro, { Component } from '@tarojs/taro';
import Index from './pages/index';
import dva from './utils/dva';
import models from './models';
import { Provider } from '@tarojs/redux';
import 'taro-ui/dist/style/index.scss'
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
      'pages/practice/index',
      'pages/scope/index',
      'pages/taroUi/index',
      'pages/native/index',
      'pages/events/index',
      'pages/event/index',
      'pages/cssModules/index',
      'pages/comstyle/index',
      'pages/request/index',
      'pages/todolist/index',
      'pages/usingComponents/index',
      'pages/route/index',
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Taro',
      navigationBarTextStyle: 'black',
    },
    debug: true
  };

  componentDidMount() {
    Taro.eventCenter.on('overflow', args => {
      console.log('eventCenter', args)
    })
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
