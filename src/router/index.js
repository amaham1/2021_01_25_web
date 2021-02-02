import Vue from 'vue'
import Router from 'vue-router'
import Home from '../vues/Home'
import Login from '../vues/Login'
import Me from '../vues/Me'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
