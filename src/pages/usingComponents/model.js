import * as usingComponentsApi from './service';

export default {
  namespace: 'usingComponents',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { success, data } = yield call(usingComponentsApi.demo, {});
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
