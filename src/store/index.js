import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    username: '',
    uid: '',
    is_logged_in: true,
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
    }
  },
  mutations: {
    set_username : (state, payload) => {
      state.username = payload;
    },
    set_uid : (state, payload) => {
      state.uid = payload;
    },
    set_is_logged_in : (state, payload) => {
      state.is_logged_in = payload;
    }
  },
  actions : {
    login : async (context, payload) => {
      console.log('login');
      const body = {
        username: payload.username,
        password: payload.password,
      };
      let { data } = await Vue.axios.post('/login', body);
      context.commit('set_username', data.username);
      context.commit('set_uid', data.uid);
      context.commit('set_is_logged_in', true);
      return data;
    },
    logout : async (context) => {
      console.log('logout');
      let res = await Vue.axios.post('/logout');
      context.commit('set_username', '');
      context.commit('set_uid', '');
      context.commit('set_is_logged_in', false);
      return res;
    },
    register : async (context, payload) => {
      const url = '/register';
      const body = {
        username: payload.username,
        password: payload.password,
      };
      let { data } = await Vue.axios.post(url, body);
      context.commit('set_username', data.username);
      context.commit('set_uid', data.uid);
      context.commit('set_is_logged_in', true);
      return data;
    },
  }
});
