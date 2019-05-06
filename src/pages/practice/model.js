import * as practiceApi from './service';

export default {
  namespace: 'practice',
  state: {
    parentTabDatas: [],
    tabTypeModalId: null,
    tabs: [],
    dynamicTabIdx: 0,
    tabTypeModalVisible: false
  },

  effects: {
    * tabItems(_, { call, put }) {
      console.log('-----', _.id)
      yield put({ type: 'save',
        payload: {
          tabTypeModalId: _.id,
          tabs: practiceApi.tabItems(_.id),
        } });
    },
    * parentTabDatas(_, {call, put}) {
      yield put({ type: 'save',
        payload: {
          parentTabDatas: practiceApi.getParentTabDatas(),
        } });
    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  }

};
