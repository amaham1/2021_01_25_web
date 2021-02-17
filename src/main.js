import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuex from 'vuex'
import VueSidebarMenu from 'vue-sidebar-menu'

Vue.config.productionTip = false
Vue.prototype.$Axios = axios
Vue.use(VueSidebarMenu)

function init () {
  // const savedToken = Cookies.get('accessToken')
  const savedToken = sessionStorage.getItem('accessToken')
  // api.defaults.headers.common['x-accept-type'] = 'customer';
  if (savedToken) {
    return store.dispatch('loginByToken', savedToken)
  } else {
    return Promise.resolve()
  }
}

init().then(() => {
  window.vm = new Vue({
    Vuex,
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
