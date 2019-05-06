import Request from '../../utils/request';

const parentTabDatas = [
  {
    label: '美食',
    value: 1,
    id: 1,
    datas: [
      {
        parentId: 1,
        label: '美食',
        value: 1
      },
      {
        parentId: 1,
        label: '快餐便当',
        value: 2
      },
      {
        parentId: 1,
        label: '汉堡薯条',
        value: 3
      },
      {
        parentId: 1,
        label: '意面披萨',
        value: 4
      },
      {
        parentId: 1,
        label: '包子粥店',
        value: 5
      },
      {
        parentId: 1,
        label: '米粉面馆',
        value: 6
      },
      {
        parentId: 1,
        label: '饺子混沌',
        value: 7
      },
      {
        parentId: 1,
        label: '麻辣烫冒菜',
        value: 8
      }
    ]
  },
  {
    label: '美团专送',
    value: 2,
    id: 2,
    datas: [
      {
        parentId: 2,
        label: '美团专送',
        value: 1
      },
      {
        parentId: 2,
        label: '快餐小吃',
        value: 2
      },
      {
        parentId: 2,
        label: '西餐披萨',
        value: 3
      },
      {
        parentId: 2,
        label: '地方菜',
        value: 4
      },
      {
        parentId: 2,
        label: '异国他乡',
        value: 5
      },
      {
        parentId: 2,
        label: '海鲜烧烤',
        value: 6
      },
      {
        parentId: 2,
        label: '甜品饮品',
        value: 7
      },
      {
        parentId: 2,
        label: '新店特惠',
        value: 8
      },
      {
        parentId: 2,
        label: '品牌连锁',
        value: 9
      },

    ]
  },
  {
    label: '甜点饮品',
    value: 3,
    id: 3,
    datas: [
      {
        parentId: 3,
        label: '甜点饮品',
        value: 1
      },
      {
        parentId: 3,
        label: '面包烘培',
        value: 2
      },
      {
        parentId: 3,
        label: '奶茶果汁',
        value: 3
      },
      {
        parentId: 3,
        label: '可口甜品',
        value: 4
      },
      {
        parentId: 3,
        label: '醒脑咖啡',
        value: 5
      },
      {
        parentId: 3,
        label: '凉茶冰淇淋',
        value: 6
      }
    ]
  },
  {
    label: '早餐',
    value: 4,
    id: 4,
    datas: [
      {
        parentId: 4,
        label: '早餐',
        value: 1
      },
      {
        parentId: 4,
        label: '包子粥店',
        value: 2
      },
      {
        parentId: 4,
        label: '米粉面馆',
        value: 3
      },
      {
        parentId: 4,
        label: '饺子混沌',
        value: 4
      },
      {
        parentId: 4,
        label: '地方小吃',
        value: 5
      },
      {
        parentId: 4,
        label: '豆浆品类',
        value: 6
      },
      {
        parentId: 4,
        label: '汉堡面包',
        value: 7
      },
      {
        parentId: 4,
        label: '醒脑咖啡',
        value: 8
      },

    ]
  },
  {
    label: '正餐优选',
    value: 5,
    id: 5,
    datas: [
      {
        parentId: 5,
        label: '正餐优选',
        value: 1
      },
      {
        parentId: 5,
        label: '地方菜系',
        value: 2
      },
      {
        parentId: 5,
        label: '火锅烧烤',
        value: 3
      },
      {
        parentId: 5,
        label: '日韩料理',
        value: 4
      },
      {
        parentId: 5,
        label: '轻食西餐',
        value: 5
      },
      {
        parentId: 5,
        label: '快餐小吃',
        value: 6
      }
    ]
  },
  {
    label: '夜宵',
    value: 6,
    id: 6,
    datas: [
      {
        parentId: 6,
        label: '夜宵',
        value: 1
      },
      {
        parentId: 6,
        label: '龙虾烧烤',
        value: 2
      },
      {
        parentId: 6,
        label: '热门小炒',
        value: 3
      },
      {
        parentId: 6,
        label: '粥面饺子',
        value: 4
      },
      {
        parentId: 6,
        label: '炸鸡汉堡',
        value: 5
      },
      {
        parentId: 6,
        label: '鸭脖小吃',
        value: 6
      },
      {
        parentId: 6,
        label: '麻辣烫',
        value: 7
      },
      {
        parentId: 6,
        label: '意面披萨',
        value: 8
      },
      {
        parentId: 6,
        label: '火锅串串',
        value: 9
      },
      {
        parentId: 6,
        label: '香锅烤鱼',
        value: 10
      },

    ]
  },
  {
    label: '家常菜',
    value: 7,
    id: 7,
    datas: [
      {
        parentId: 7,
        label: '家常菜',
        value: 1
      },
      {
        parentId: 7,
        label: '口味川湘',
        value: 2
      },
      {
        parentId: 7,
        label: '粤菜茶餐厅',
        value: 3
      },
      {
        parentId: 7,
        label: '特色私房',
        value: 4
      },
      {
        parentId: 7,
        label: '北方佳肴',
        value: 5
      },

    ]
  },
  {
    label: '能量西餐',
    value: 8,
    id: 8,
    datas: [
      {
        parentId: 8,
        label: '能量西餐',
        value: 1
      },
      {
        parentId: 8,
        label: '汉堡薯条',
        value: 2
      },
      {
        parentId: 8,
        label: '意面披萨',
        value: 3
      },

    ]
  },
  {
    label: '小吃馆',
    value: 9,
    id: 9,
    datas: [
      {
        parentId: 9,
        label: '小吃馆',
        value: 1
      },
      {
        parentId: 9,
        label: '粥粉面馆',
        value: 2
      },
      {
        parentId: 9,
        label: '地方小吃',
        value: 3
      },
      {
        parentId: 9,
        label: '鸡排鸭脖',
        value: 4
      },
      {
        parentId: 9,
        label: '饺子混沌',
        value: 5
      },
      {
        parentId: 9,
        label: '麻辣烫',
        value: 6
      },
      {
        parentId: 9,
        label: '暖胃粉丝汤',
        value: 7
      },
      {
        parentId: 9,
        label: '凉皮肉夹馍',
        value: 8
      },

    ]
  },
  {
    label: '快餐简吃',
    value: 10,
    id: 10,
    datas: [
      {
        parentId: 10,
        label: '快餐简吃',
        value: 1
      },
      {
        parentId: 10,
        label: '快食盖饭',
        value: 2
      },
      {
        parentId: 10,
        label: '煲仔饭',
        value: 3
      },
      {
        parentId: 10,
        label: '黄焖鸡米饭',
        value: 4
      },
      {
        parentId: 10,
        label: '香浓排骨饭',
        value: 5
      },

    ]
  }
]

export const getParentTabDatas = () => parentTabDatas

export const tabItems = (id = 1) => {
  const arr = (parentTabDatas.find(o => o.id === id))
  return !!arr ? arr.datas : []
}
