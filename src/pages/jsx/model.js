import * as jsxApi from './service';

export default {
  namespace: 'jsx',
  state: {
    list: [
      {
        label: "不能在包含 JSX 元素的 map 循环中使用 if 表达式（后面版本支持）",
        value: 1
      }
    ]
  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { success, data } = yield call(jsxApi.demo, {});
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
      console.log('payload', payload)
      return { ...state, ...payload };
    },
  },

};
