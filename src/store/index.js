import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    host: 'http://localhost:8080',
    token: '',
    role: ''
  },
  mutations: {
    loginToken: function (state, payload) {
      state.token = payload
    },
    logout (state) {
      if (state.token) {
        state.token = ''
        alert('응')
      }
    }
  }
})
