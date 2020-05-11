import axios from '@/axios.js'

let api = {
  getSearchList: function () {
    return axios.get('/api/meituan/header/search.json')
  },
  getHotSearch: function () {
    return axios.get('/api/meituan/header/searchHotWords.json')
  },
  getNavList: function () {
    return axios.get('/api/meituan/index/nav.json')
  },
  getKeyWord: function () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getProvince: function () {
    return axios.get('/api/meituan/city/province.json')
  },
  getHotCity: function () {
    return axios.get('/api/meituan/city/hot.json')
  },
  getLateCity: function () {
    return axios.get('/api/meituan/city/recents.json')
  },
  getCityList: function () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  getGoodList: function () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  register: function (params) {
    return axios.get('/api/meituan/register', params)
  },
  login: function (params) {
    return axios.get('/api/meituan/login', params)
  },
  getPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  }
}

export default api
