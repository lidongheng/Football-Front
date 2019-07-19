const state = {
  isLogin: localStorage.user || false
}

const getters = {
  isLogin: state => state.isLogin
}

const mutations = {
  loginStatus (state, payload) {
    state.isLogin = payload.isLogin
  }
  // setLogin (state, status) {
  //   state.isLogin = status
  // }
}

const actions = {
  setLogin (context, payload) {
    context.commit('loginStatus', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
