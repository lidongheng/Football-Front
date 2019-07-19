const state = {
  currentUser: localStorage.user || false
}

const getters = {
  currentUser: state => state.currentUser
}

const mutations = {
  userStatus (state, payload) {
    if (payload.user) {
      state.currentUser = payload.user
    } else {
      state.currentUser = null
    }
  }
  // setUser (state, user) {
  //   state.currentUser = user
  // }
}

const actions = {
  setUser (context, payload) {
    context.commit('userStatus', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
