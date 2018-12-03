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

  upload(file, name, uid) {
    const url = '/upload';
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('uid', uid);
    return Vue.axios.post(url, formData, config);
  },

  getAllVideo() {
    const url = '/video';
    return Vue.axios.get(url);
  },

  getVideoDetail(video_id, uid) {
    const url = '/video/' + video_id;
    const body = {
      uid: uid,
    };
    return Vue.axios.post(url, body);
  },

  like(video_id, uid) {
    const url = '/like';
    const body = {
      video_id: video_id,
      uid: uid,
    };
    return Vue.axios.post(url, body);
  },

  unlike(video_id, uid) {
    const url = '/unlike';
    const body = {
      video_id: video_id,
      uid: uid,
    };
    return Vue.axios.post(url, body);
  }
}
