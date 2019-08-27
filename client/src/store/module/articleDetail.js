const state = {
  article: {}
}

const getters = {
  article: state => state.article
}

const mutations = {
  articleStatus (state, payload) {
    state.article = payload.article
  },
  removeArticle (state, payload) {
    state.article = payload.article
  }
}

const actions = {
  setArticle (context, payload) {
    context.commit('articleStatus', payload)
  },
  resetArticle (context, payload) {
    context.commit('removeArticle', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
