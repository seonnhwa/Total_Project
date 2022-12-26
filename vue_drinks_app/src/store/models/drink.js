import api from '../apiUtil'

// 초기값 선언
const stateInit = {
  Drink: {
    category: null,
    name: null,
    store: null,
    keyword: null,
    img: null
  }
}

export default {
  namespaced: true,
  state: {
    DrinkList: [],
    Drink: { ...stateInit.Drink },
    InsertedResult: null,
    UpdatedResult: null
  },
  getters: {
    DrinkList: state => state.DrinkList,
    Drink: state => state.Drink,
    DrinkInsertedResult: state => state.InsertedResult,
    DrinkUpdatedResult: state => state.UpdatedResult,
    count(state) {
      return state.count
    }
  },
  mutations: {
    setDrinkList(state, data) {
      state.DrinkList = data
    },
    setDrink(state, data) {
      state.Drink = data
    },
    setInsertedResult(state, data) {
      state.InsertedResult = data
    },
    setUpdatedResult(state, data) {
      state.UpdatedResult = data
    }
  },
  actions: {
    // 리스트 조회
    actDrinkList(context, payload) {
      /* RestAPI 호출 */
      api
        .get(`/serverApi/drinks`, { params: payload })
        .then(response => {
          const userList = response && response.data && response.data.rows
          context.commit('setDrinkList', userList)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('DrinkList.error', error)
          context.commit('setDrinkList', [])
        })
    },
    // 등록
    actDrinkInsert(context, payload) {
      // 상태값 초기화
      context.commit('setInsertedResult', null)
      /* RestAPI 호출 */
      api
        .post(`/serverApi/drinks`, payload)
        .then(response => {
          const insertedResult = response && response.data && response.data.id
          context.commit('setInsertedResult', insertedResult)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('DrinkInsert.error', error)
          context.commit('setInsertedResult', -1)
        })
    },
    // 초기화
    actDrinkInit(context, payload) {
      context.commit('setDrink', { ...stateInit.Drink })
    },
    // 상세정보 조회
    actDrinkInfo(context, payload) {
      console.log('actDrinkInfo start')
      // 상태값 초기화
      context.commit('setDrink', { ...stateInit.Drink })

      /* RestAPI 호출 */
      api
        .get(`/serverApi/drinks/${payload}`)
        .then(response => {
          console.log('response : ', response)
          const drink = response && response.data
          context.commit('setDrink', drink)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('DrinkInfo.error', error)
          context.commit('setDrink', -1)
        })
    }
  }
}
