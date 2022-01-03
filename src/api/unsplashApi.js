import axios from 'axios';

import { CLIENT_ID } from 'config'

const apiUnsplash = axios.create({
  baseURL: 'https://api.unsplash.com'
});

const _get = apiUnsplash.get;

apiUnsplash.get = function (url, query = {}) {
  return _get(url, { params: { ...query }});
};

apiUnsplash.interceptors.request.use(function(config) {
  config.params['client_id'] = CLIENT_ID
  return config;
}, error => {
  return Promise.reject(error);
});

apiUnsplash.interceptors.response.use(response => {
  return response.data;
}, error => {
  return Promise.reject(error);
});

export default apiUnsplash;
