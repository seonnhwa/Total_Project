import axios from '../apiUtils'

const stateInit = {
  DrinkInfo: {
    category: null,
    name: null,
    store: null,
    keyword: null,
    img: null
  }
}

export default {
  state: {
    DrinkInfo: { ...stateInit.DrinkInfo }, // token에서 추출한 사용자 정보
    Loading: false,
    Error: null
  },
  getters: {
    DrinkInfo: state => state.DrinkInfo
  },
  mutations: {
    setDrinkInfo(state, data) {
      state.DrinkInfo = data
    }
  },
  actions: {}
}
