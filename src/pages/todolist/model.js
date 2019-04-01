

export default {
  namespace: 'todolist',
  state: {
    doinglist: ['看电影', '打篮球', '跑步', '玩手机'],
    donelist: [],
    inputValue: ''
  },

  effects: {

  },

  reducers: {
    save(state, { payload }) {
      return { ...state,  ...payload}
    }
  },

};
