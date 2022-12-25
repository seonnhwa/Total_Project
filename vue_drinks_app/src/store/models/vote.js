import api from '../apiUtil'

// 초기값 선언
const stateInit = {
  Vote: {
    like: null
  }
}

export default {
  state: {
    Vote: { ...stateInit.Vote },
    InsertedResult: null,
    UpdatedResult: null
  },
  getters: {
    Vote: state => state.Vote,
    VoteInsertedResult: state => state.InsertedResult,
    VoteUpdatedResult: state => state.UpdatedResult,
    count(state) {
      return state.count
    }
  },
  mutations: {
    setVote(state, data) {
      state.Vote = data
    },
    setInsertedResult(state, data) {
      state.InsertedResult = data
    },
    setUpdatedResult(state, data) {
      state.UpdatedResult = data
    }
  },
  actions: {
    // 등록
    actVoteInsert(context, payload) {
      // 상태값 초기화
      context.commit('setInsertedResult', null)
      /* RestAPI 호출 */
      api
        .post('/serverApi/vote', payload)
        .then(response => {
          const insertedResult = response && response.data && response.data.id
          context.commit('setInsertedResult', insertedResult)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('VoteInsert.error', error)
          context.commit('setInsertedResult', -1)
        })
    },
    // 초기화
    actVoteInit(context, payload) {
      context.commit('setVote', { ...stateInit.Vote })
    },
    // 수정
    actVoteUpdate(context, payload) {
      // 상태값 초기화
      context.commit('setUpdatedResult', null)
      /* RestAPI 호출 */
      api
        .put(`/serverApi/vote/${payload.s_userid}`, payload)
        .then(response => {
          const updatedResult = response && response.data && response.data.updatedCount
          context.commit('setUpdatedResult', updatedResult)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('VoteUpdate.error', error)
          context.commit('setUpdatedResult', -1)
        })
    }
  }
}
