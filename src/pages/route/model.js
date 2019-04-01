import * as routeApi from './service';

export default {
  namespace: 'route',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { success, data } = yield call(routeApi.demo, {});
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
