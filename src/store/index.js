import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [
      // {
      //   id: 0,
      //   title: 'Hello',
      //   content: 'There!'
      // },
      // {
      //   id: 1,
      //   title: 'Hello',
      //   content: 'There! Again'
      // }
    ]
  },
  getters: {
    getNotes: state => state.notes.reverse(),
    getNote: state => id => state.notes.find(note => note.id === id)
  },
  mutations: {
    addingNote: (state, newNote) => state.notes.push(newNote),
    removingNote: (state, id) =>
      (state.notes = state.notes.filter(note => note.id != id))
  },
  actions: {
    addNote: ({ commit }, newNote) => commit('addingNote', newNote),
    removeNote: ({ commit }, id) => commit('removingNote', id)
  }
})
