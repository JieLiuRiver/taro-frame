

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
      },
      {
        name: '组件样式',
        url: '/pages/comstyle/index'
      },
      {
        name: 'cssModules',
        url: '/pages/cssModules/index'
      },
      {
        name: '事件处理',
        url: '/pages/event/index'
      },
      {
        name: '消息机制',
        url: '/pages/events/index'
      },
      {
        name: '原生页面',
        url: '/pages/native/index'
      },
      {
        name: 'Taro-Ui',
        url: '/pages/taroUi/index'
      },
      {
        name: '小程序原生作用域',
        url: '/pages/scope/index'
      },
      {
        name: '实战',
        url: '/pages/practice/index'
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
