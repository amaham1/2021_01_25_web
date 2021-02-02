import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookie from 'vue-cookie'
import store from './store'
import axios from 'axios'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.prototype.$Axios = axios

Vue.use(VueCookie)
new Vue({
  router,
  store,
  Vuex,
  render: h => h(App)
}).$mount('#app')
