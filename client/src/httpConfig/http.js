import axios from 'axios';
import apiUrl from './api';

axios.defaults.timeout = 10000;
axios.defaults.baseURL = apiUrl;
axios.defaults.transformRequest = function (data) {
  data = JSON.stringify(data);
  return data;
};
// 路由请求拦截
// http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    if (localStorage.getItem('token')) {
      config.headers['Authorization'] = localStorage.getItem('token');
    }
    return config;
  },
  error => {
    return Promise.reject(error.response);
  });

// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
  response => {
    console.log('拦截器 response success ');
    console.log(response.status);
    return response;
  },
  error => {
    console.log('拦截器 response error ')
    console.log(error)
    if(error.request){
      console.log(error.request)
    } else if(error.response){
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    if (error && error.response) {
      switch (error.response.status) {
        case 400: error.message = '请求错误(400)' ; break;
        case 401:
          error.message = '未授权，请重新登录(401)';
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          localStorage.removeItem('userId');
          window.location.href='/login/';
          break;
        case 403: error.message = '拒绝访问(403)'; break;
        case 404: error.message = '请求出错(404)'; break;
        case 408: error.message = '请求超时(408)'; break;
        case 500: error.message = '服务器错误(500)'; break;
        case 501: error.message = '服务未实现(501)'; break;
        case 502: error.message = '网络错误(502)'; break;
        case 503: error.message = '服务不可用(503)'; break;
        case 504: error.message = '网络超时(504)'; break;
        case 505: error.message = 'HTTP版本不受支持(505)'; break;
        default: error.message = '连接出错(${error.response.status})!';
      }
    }else{
      error.message = '连接服务器失败!';
    }
    return Promise.reject(error);
  }
);

export default axios;
