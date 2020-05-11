import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '',
    position: ''
  },
  mutations: {
    setUserName (state, payload) {
      state.userName = payload
    },
    setPosition (state, payload) {
      state.position = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
