import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    name:"home",
    path:"/home",
    // redirect:'/home',
    component:Home
  },
  {
    path:'/about',
    name:'about',
    component:() => import('../views/About')
  },
  {
    path:'/question/:id',
    name:'question',
    component:() =>import('../views/Question')
  },
  {
    path:'/activity',
    name:'activity',
    redirect:'/activity/studentList',
    component:() => import('../views/Activity'),
    children:[
      {
        path:'studentList',
        name:'studentList',
        component:() => import('../components/StudentList')
      },
      {
        path:'studentQuestion',
        name:'studentQuestion',
        component:() => import('../components/StudentQuestion')
      }
    ]
  },
  {
    path:'/movie',
    name:'movie',
    component:() => import('../views/Movie'),
    beforeEnter:(to,from,next) =>{
      if(!localStorage.getItem('id')){
        window.confirm("请先登录");
        next('/login');
      }else{
        next();
      }
      // if(!document.cookie.id){
      //   window.confirm("请先登录");
      //     next('/login');
      // }else{
      //   next();
      // }
    }
  },
  {
    path:'/login',
    component:() => import('../views/Login')
  },
  {
    path:'/notFound',
    name:'notFound',
    component:() => import('../views/NotFound')
  },
  {
    path:'*',
    redirect(to){
      // console.log(to)
      if(to.path === '/'){
        return '/home'
      }else{
        return '/notFound'  
      }
    }
  }
];

const router = new VueRouter({
  mode:'history',
  routes,
  linkActiveClass:'active',
  linkExactActiveClass:'exact-active'
});

export default router;
