import * as cssModulesApi from './service';

export default {
  namespace: 'cssModules',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { success, data } = yield call(cssModulesApi.demo, {});
      if (success) {
        yield put({ type: 'save',
          payload: {
            topData: data,
          } });
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
