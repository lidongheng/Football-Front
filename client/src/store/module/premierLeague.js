const state = {
  FW: [],
  MF: [],
  DF: [],
  GK: []
}

const getters = {
  FW: state => state.FW,
  MF: state => state.MF,
  DF: state => state.DF,
  GK: state => state.GK
}

const mutations = {
  Players (state, payload) {
    state.FW = payload.FW
    state.MF = payload.MF
    state.DF = payload.DF
    state.GK = payload.GK
  }
}

const actions = {
  setPlayers (context, payload) {
    context.commit('Players', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
