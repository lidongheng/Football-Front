const state = {
  FW: [],
  MF: [],
  DF: [],
  GK: [],
  style: ''
}

const getters = {
  FW: state => state.FW,
  MF: state => state.MF,
  DF: state => state.DF,
  GK: state => state.GK,
  style: state => state.style
}

const mutations = {
  Players (state, payload) {
    state.FW = payload.FW
    state.MF = payload.MF
    state.DF = payload.DF
    state.GK = payload.GK
  },
  Style (state, payload) {
    state.style = payload.style
  }
}

const actions = {
  setPlayers (context, payload) {
    context.commit('Players', payload)
  },
  setStyle (context, payload) {
    context.commit('Style', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
