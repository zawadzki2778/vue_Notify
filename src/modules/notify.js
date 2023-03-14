export default {
  state: {
    messages: [],
    messagesMain: []
  },
  mutations: {
    SET_MESSAGES(state, payload) {
      state.messages = payload
    },
    SET_MESSAGES_MAIN(state, payload) {
      state.messagesMain = payload
    }
  },
  actions: {
    SET_MESSAGES({ commit }, payload) {
      commit('SET_MESSAGES', payload)
    },
    SET_MESSAGES_MAIN({ commit }, payload) {
      commit('SET_MESSAGES_MAIN', payload)
    }
  },
  getters: {
    GET_MESSAGES(state) {
      return state.messages
    },
    GET_MESSAGES_MAIN(state) {
      return state.messagesMain
    }
  },
}