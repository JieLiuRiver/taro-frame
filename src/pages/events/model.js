import * as eventsApi from './service';

export default {
  namespace: 'events',
  state: {
    num: 1,
    status: 1
  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { success, data } = yield call(eventsApi.demo, {});
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
