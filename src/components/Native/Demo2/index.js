
Component({
    externalClasses: ['custom-class'],
    options: {
  
    },
    /**
     * 组件的属性列表
     * 用于组件自定义设置
     */
    properties: {
      
    },
  
    /**
     * 私有数据,组件的初始数据
     * 可用于模版渲染
     */
    data: {
      icon_arrow_top: 'https://img.beautybase.cn/wxapp/icon_arrow_top.png'
    },
  
    /**
     * 组件的方法列表
     * 更新属性和数据的方法与更新页面数据的方法类似
     */
    methods: {
      /*
       * 公有方法
       */
      //隐藏弹框
        
      /*
      * 内部私有方法建议以下划线开头
      * triggerEvent 用于触发事件
      */
      _backToTop() {
        wx.pageScrollTo({
          scrollTop: 0,
          duration: 0
        })
      }
    }
  })
  