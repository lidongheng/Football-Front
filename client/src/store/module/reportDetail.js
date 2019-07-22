const state = {
  report: {}
}

const getters = {
  report: state => state.report
}

const mutations = {
  reportStatus (state, payload) {
    state.report = payload.report
  }
  // setLogin (state, status) {
  //   state.isLogin = status
  // }
}

const actions = {
  setReport (context, payload) {
    context.commit('reportStatus', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
