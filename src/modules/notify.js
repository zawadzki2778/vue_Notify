export default {
  state: {
    messages: [],
  },
  mutations: {
    SET_MESSAGES(state, payload) {
      state.messages = payload
    }
  },
  actions: {
    SET_MESSAGES({ commit }, payload) {
      commit('SET_MESSAGES', payload)
    }
  },
  getters: {
    GET_MESSAGES(state) {
      return state.messages
    }
  },
}