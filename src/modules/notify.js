import loadMore from "../assets/js/loadMore.js"

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
    },
    LOAD_MESSAGE(state, payload) {
      state.messagesMain = [...state.messagesMain, ...payload]
    }
  },
  actions: {
    SET_MESSAGES({ commit }, payload) {
      commit('SET_MESSAGES', payload)
    },
    SET_MESSAGES_MAIN({ commit }, payload) {
      commit('SET_MESSAGES_MAIN', payload)
    },
    LOAD_MESSAGES({ commit, getters }) {
      let res = getters.GET_MESSAGES_FILTER
      commit('LOAD_MESSAGE', loadMore(res))
    }
  },
  getters: {
    GET_MESSAGES(state) {
      return state.messages
    },
    GET_MESSAGES_MAIN(state) {
      return state.messagesMain
    },
    GET_MESSAGES_FILTER(state) {
      return state.messages.filter(mes => {
        return mes.main === false
      })
    },
  },
}