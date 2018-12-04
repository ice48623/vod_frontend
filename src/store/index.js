import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    username: localStorage.getItem('username'),
    uid: localStorage.getItem('uid'),
    is_logged_in: localStorage.getItem('is_logged_in'),
    popup: {
      title: '',
      message: '',
      dialog: '',
    },
  },
  getters : {
    username : state => {
      return state.username;
    },
    uid : state => {
      return state.uid;
    },
    is_logged_in : state => {
      return state.is_logged_in;
    },
    popup : state => {
      return state.popup;
    },
  },
  mutations: {
    login : (state, {username, uid}) => {
      state.is_logged_in = true;
      state.username = username;
      state.uid = uid;
      localStorage.setItem('is_logged_in', true);
      localStorage.setItem('username', username);
      localStorage.setItem('userId', uid);
    },
    logout : (state) => {
      state.is_logged_in = false;
      localStorage.removeItem('is_logged_in');
      localStorage.removeItem('username');
      localStorage.removeItem('uid');
    },
    open_popup : (state, payload) => {
      state.popup.title = payload.title;
      state.popup.message = payload.message;
      state.popup.dialog = true;
    },
    close_popup : (state) => {
      state.popup.title = '';
      state.popup.message = '';
      state.popup.dialog = false;
    },
  },
  actions : {
    login : async (context, payload) => {
      console.log('login');
      console.log(payload);
      context.commit('login', payload);
    },
    logout : async (context) => {
      console.log('logout');
      context.commit('logout');
    },
    register : async (context, payload) => {
      context.commit('login', payload);
    },
    openPopup : (context, payload) => {
      context.commit('open_popup', payload);
    },
    closePopup : (context) => {
      context.commit('close_popup');
    },
  }
});
