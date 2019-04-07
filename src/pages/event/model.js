import * as eventApi from './service';

export default {
  namespace: 'event',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { success, data } = yield call(eventApi.demo, {});
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
