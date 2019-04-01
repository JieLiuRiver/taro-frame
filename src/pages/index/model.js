

export default {
  namespace: 'index',
  state: {
    demolist: [
      {
        name: 'My ToDoList',
        url: '/pages/todolist/index'
      },
      {
        name: '异步请求数据',
        url: '/pages/request/index'
      },
      {
        name: 'Taro组件内使用原生组件',
        url: '/pages/usingComponents/index'
      },
      {
        name: '路由Api',
        url: '/pages/route/index'
      }
    ]
  },
  effects: {
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
