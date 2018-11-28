import Vue from 'vue'

export default {
  test() {
    const url = '/';
    return Vue.axios.get(url);
  },

  upload(file, img, name, uid) {
    const url = '/upload';
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    const formData = new FormData();
    formData.append('file', file);
    formData.append('img', img);
    formData.append('name', name);
    formData.append('uid', uid);
    return Vue.$axios.post(url, formData, config);
  },
}
