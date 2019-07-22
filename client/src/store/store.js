import Vue from 'vue'
import Vuex from 'vuex'
import users from './module/users'
import status from './module/status'
import reportDetail from './module/reportDetail'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    users,
    status,
    reportDetail
  }
})
