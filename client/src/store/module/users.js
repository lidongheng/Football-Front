const state = {
  currentUser: localStorage.user || null
}

const getters = {
  currentUser: state => state.currentUser
}

const mutations = {
  userStatus (state, user) {
    if (user) {
      state.currentUser = user
    } else {
      state.currentUser = null
    }
  }
}

const actions = {
  setUser ({commit}, user) {
    commit('userStatus', user)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
