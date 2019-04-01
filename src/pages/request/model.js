import * as requestApi from './service';
import Taro from '@tarojs/taro';

export default {
  namespace: 'request',
  state: {
    goodsCategoryList: []
  },

  effects: {
    * demo(_, { call, put }) {
      Taro.showLoading({
        title: '加载中',
        mask: true
      })
      const { success, data } = yield call(requestApi.demo, {});
      Taro.hideLoading()
      if (success) {
        yield put({
          type: 'save',
          payload: {
            goodsCategoryList: data.goodsCategoryList,
          }});
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
