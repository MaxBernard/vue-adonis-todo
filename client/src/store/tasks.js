// import router from '../router';
import Vue from 'vue';
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    tasks: [],
    newTaskTitle: null,
    newTaskDescr: null,
  },
  actions: {
    createTask({ commit, state, rootState }) {
      return HTTP().post(`/projects/${rootState.projects.currentProject.id}/tasks`, {
        title: state.newTaskTitle,
        description: state.newTaskTitle,
      })
        .then(({ data }) => {
          commit('appendTask', data);
          commit('setNewTaskTitle', null);
        });
    },
    saveTask({ commit }, task) {
      return HTTP().patch(`tasks/${task.id}`, task)
        .then(() => {
          commit('unsetEditMode', task);
        });
    },
    deleteTask({ commit }, task) {
      return HTTP().delete(`tasks/${task.id}`)
        .then(() => {
          commit('removeTask', task)
        });
    },
    fetchTasksForProject({ commit }, project) {
      const id = project.id
      console.log('Project ID: ', id)
      return HTTP().get(`projects/${project.id}/tasks`)
        .then(({ data }) => {
          commit('setTasks', data)
        })
    },
  },
  getters: {
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    setNewTaskTitle(state, title) {
      state.newTaskTitle = title
    },
    appendTask(state, task) {
      state.tasks.push(task);
    },
    setTaskTitle(state, { task, title }) {
      task.title = title
    },
    setEditMode(state, task) {
      Vue.set(task, 'isEditMode', true)
    },
    unsetEditMode(state, task) {
      Vue.set(task, 'isEditMode', false)
    },
    removeTask(state, task) {
      state.tasks.splice(state.tasks.indexOf(task), 1)
    },
    toggleCompleted(state, task) {
      task.completed = !task.completed;
    },
  },
};
