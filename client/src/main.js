// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { routes } from './routes'
import {store} from './store/store'
import axios from './httpConfig/http'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$axios = axios

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
