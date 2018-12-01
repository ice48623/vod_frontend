import Vue from 'vue'

export default {
  get() {
    const url = '/';
    return Vue.axios.get(url);
  },

  post() {
    const url = '/';
    return Vue.axios.post(url);
  },

  upload(file, img, name, uid) {
    const url = '/upload';
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    const formData = new FormData();
    formData.append('file', file);
    formData.append('img', img);
    formData.append('name', name);
    formData.append('uid', uid);
    return Vue.axios.post(url, formData, config);
  },

  login(username, password) {
    const url = '/login';
    const body = {
      username: username,
      password: password,
    };
    return Vue.axios.post(url, body);
  },

  logout() {
    const url = '/logout';
    return Vue.post(url);
  },

  register(username, password) {
    const url = '/register';
    const body = {
      username: username,
      password: password,
    };
    return Vue.axios.post(url, body);
  },
}
