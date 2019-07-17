import Vue from 'vue'
import Vuex from 'vuex'
import users from './module/users'
import status from './module/status'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    users,
    status
  }
})
