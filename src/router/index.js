import Vue from 'vue'
import Router from 'vue-router'
import Home from '../vues/Home'
import Login from '../vues/Login'
import GoodsList from '../vues/GoodsList'
import Header from '@/components/layout/Header'
import Left from '@/components/layout/Left'
import Greeting from '../vues/intro/greeting'
import Parmplace from '../vues/intro/parmplace'
import GoodsDetatil from '../vues/goodsDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      components: {
        default: Login
      }
    },
    {
      path: '/greeting',
      name: 'greeting',
      components: {
        header: Header,
        left: Left,
        default: Greeting
      }
    },
    {
      path: '/parmplace',
      name: 'parmplace',
      components: {
        header: Header,
        left: Left,
        default: Parmplace
      }
    },
    {
      path: '/home',
      name: 'Home',
      components: {
        header: Header,
        left: Left,
        default: Home
      }
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      components: {
        header: Header,
        left: Left,
        default: GoodsList
      }
    },
    {
      path: '/goodsList/detail/:goods_id',
      name: 'goodsListDetail',
      components: {
        header: Header,
        left: Left,
        default: GoodsDetatil
      },
      props: {
        default: true
      }
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
