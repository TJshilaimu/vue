import Vue from 'vue'
import Router from 'vue-router'
import Base from '@/layout/base.vue'
import Index from '@/views/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'base',
      redirect: '/index',
      component: Base,
      children: [
        {
          path: 'index',
          component: Index
        },
        {
          path: 'changeCity',
          component: () => import('@/views/changeCity.vue')
        },
        {
          path: 'detail',
          component: () => import('@/views/detail.vue')
        }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: () => import('@/layout/black.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/login.vue')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/register.vue')
        }
      ]
    }
  ],
  mode: 'history'
})
