import 'isomorphic-fetch';
import fetch from 'node-fetch';

import { api as apiConfig } from '../config/config';

function getFinalUrl(url = '') {
  let { baseUrl } = apiConfig;
  if (baseUrl.slice(-1) !== '/') {
    baseUrl += '/';
  }
  if (url[0] === '/') {
    url = url.slice(1); // eslint-disable-line
  }
  return baseUrl + url;
}

function toQueryString(data) {
  if (!data) return '';
  const qs = Object.keys(data)
    .map(key => `${key}=${encodeURIComponent(data[key])}`)
    .join('&');

  return `?${qs}`;
}

function makeRequest(url, options) {
  if (!options.headers) {
    options.headers = {}; // eslint-disable-line
  }

  options.headers['X-API-Key'] = apiConfig.key; // eslint-disable-line

  return fetch(url, options)
    .then((response) => {
      if (response.status === 401) {
        return Promise.reject('UNAUTHORIZED');
      } else if (response.status === 403) {
        return Promise.reject('FORBIDDEN');
      } else if (!response.ok) {
        return response.json().then(json => Promise.reject(json));
      }
      return response.json();
    })
    .then(responseData => responseData);
}

class HttpService {
  static get(url, data) {
    const qs = toQueryString(data);
    return makeRequest(getFinalUrl(`${url}${qs}`), {
      method: 'GET',
    });
  }
}

export default HttpService;
