// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import '@/assets/css/main.css'
import store from './store'
Vue.use(ElementUI)
Vue.directive('document-click', {
  bind: function (el, binding, vnode) {
    document.addEventListener('click', binding.value, false)
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  components: {
    App
  },

  store,
  template: '<App/>'
})
