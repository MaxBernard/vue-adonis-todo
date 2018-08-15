import axios from 'axios';
import router from '../router';
import HTTP from '../http';
/* eslint-disable */
export default {
  namespaced: true,
  state: {
    registerEmail: 'john.doe@example.com',
    registerPassword: '123456',
    registerError: null,
    loginEmail: 'john.doe@example.com',
    loginPassword: '123456',
    loginError: null,
    token: null,
  },
  actions: {
    logout({ commit }) {
      commit('setToken', null);
      router.push('/login');
    },
    register({ commit, state }) {
      commit('setRegisterError', null);
      return axios.post('http://tower-2:3333/api/auth/register', {
        email: 'john.doe@example.com',
        password: '123456',
      })
      // return axios.post('http://tower-2:3333/api/auth/register', {
      //  email: state.registerEmail,
      //  password: state.registerPassword,
      // })
        .then(({ data }) => {
          commit('setToken', data.token);
          router.push('/');
        })
        .catch(() => {
          commit('setRegisterError', 'Invalid registration info.');
        });
    },
    login({ commit, state }) {
      commit('setLoginError', null);
      return HTTP().post('/auth/login', {
        email: state.loginEmail,
        password: state.loginPassword,
      })
        .then(({ data }) => {
          commit('setToken', data.token);
          router.push('/');
        })
        .catch(() => {
          commit('setLoginError', 'Error: Unable to log you in');
        });
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setRegisterError(state, error) {
      state.registerError = error;
    },
    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },
    setRegisterPassword(state, password) {
      state.registerPassword = password;
    },
    setLoginError(state, error) {
      state.loginError = error;
    },
    setLoginEmail(state, email) {
      state.loginEmail = email;
    },
    setLoginPassword(state, password) {
      state.loginPassword = password;
    },
  },
};
