import axios from 'axios'
axios.defaults.baseURL = 'https://open.duyiedu.com'
axios.interceptors.request.use(function (config) {
  // 发送之前做的事
//   console.log(config)
  config.params = {
    ...config.params,
    appkey: 'qisana_1564196114170'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default axios
