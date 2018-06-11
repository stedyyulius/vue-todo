import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
    tasks(state) {
      return state.tasks;
    }
  },
  mutations: {
    createTodo(state, task) {
      state.tasks.push(task);
    },
    deleteTask(state, index) {
      state.tasks.splice(index, 1);
    },
    editTask(state, payload) {
      state.tasks.splice(payload.index, 1, payload.input);
    }
  },
  actions: {
    createTodo({ commit }, task) {
      commit('createTodo', task);
    },
    deleteTask({ commit }, index) {
      commit('deleteTask', index);
    },
    editTask( { commit }, payload) {
      commit('editTask', payload);
    },
  },
});

export default store;
