import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    selectedDate: null,
    dateEventData: null,
    todoData: [
      {
      "text":"Take out the trash",
      "due":"2019-11-14"
      },
      {
      "text":"Study Chinese",
      "due":"2019-11-14"
      },
      {
      "text":"Jog 2 miles",
      "due":"2019-11-14"
      }
    ]
  },
  getters: {
    dateEventData: (state) => { 
      return state.dateEventData
    },
    todoData: (state) => {
      return state.todoData
    }
  },
  mutations: {
    updateSelectedDate (state, selectedDate) {
      state.selectedDate = selectedDate
    },
    updateDateEventData (state, dateEventData) {
      state.dateEventData = dateEventData
    },
    updateTodos (state, payload) {
      state.todoData[payload.index][payload.column] = payload.contents
    },
    deleteTodo(state, index) {
      console.log(index)
      state.todoData.splice(index,1)
    },
    addTodo(state){
      state.todoData.push({
        text:"Enter Text...",
        due:"Enter Due Date..."
      })
    }
  },
  actions: {
    updateDateEventData ({ commit }, url, date) {
      Axios.get(url)
        .then(response => {
          commit('updateSelectedDate', date)
          commit('updateDateEventData', response.data)
        })
    },
    updateTodos({commit}, payload) {
      commit('updateTodos',payload)
    },
    deleteTodo({ commit }, index) {
      commit('deleteTodo',index)
    },
    addTodo({ commit }) {
      commit('addTodo')
    }
  }
})
