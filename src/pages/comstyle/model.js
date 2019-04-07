import * as comstyleApi from './service';

export default {
  namespace: 'comstyle',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { success, data } = yield call(comstyleApi.demo, {});
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
