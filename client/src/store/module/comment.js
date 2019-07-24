const state = {
  contents: []
}

const getters = {
  contents: state => state.contents
}

const mutations = {
  contentsStatus (state, payload) {
    state.contents = payload.contents
  },
  increment (state, payload) {
    state.contents.unshift({
      content: payload.comment.content,
      date: payload.comment.date,
      likes: payload.comment.likes,
      id: payload.comment._id
    })
  }
}

const actions = {
  setContents (context, payload) {
    context.commit('contentsStatus', payload)
  },
  addContents (context, payload) {
    context.commit('increment', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
