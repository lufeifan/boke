import Vue from 'vue'
import Router from 'vue-router'
// import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 默认显示首页
      path: "/",
      redirect: "/home"
    },
    {
      path: '/hell',
      name: 'hell',
      component: () => import(/* webpackChunkName: "about" */ '../components/hell.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import(/* webpackChunkName: "about" */ '../components/home.vue')
        },
        {
          path: '/detail',
          name: 'detail',
          component: () => import(/* webpackChunkName: "about" */ '../components/detail.vue')
        },
        {
          path: '/articles',
          name: 'articles',
          component: () => import(/* webpackChunkName: "about" */ '../components/articles.vue')
        },
        {
          path: '/detail/:id',
          name: 'detaildetail',
          component: () => import(/* webpackChunkName: "about" */ '../components/detail.vue'),
          props:true
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ '../admin/Login.vue')
    },
    {
      path: '/admin',
      name: 'helloworld',
      redirect: "/acticalist",
      component: () => import(/* webpackChunkName: "about" */ '../admin/HelloWorld.vue'),
      children: [
        {
          path: '/acticalist',
          name: 'acticalist',
          component: () => import(/* webpackChunkName: "about" */ '../admin/actical/Acticalist.vue')
        },
        {
          path: '/setactical',
          name: 'setactical',
          component: () => import(/* webpackChunkName: "about" */ '../admin/actical/SetActical.vue')
        },
        {
          path: '/setActical/:id',
          name: 'SetActicaldetail',
          component: () => import('../admin/actical/SetActical.vue'),
          props:true
        },
        {
          path: '/adminlist',
          name: 'adminlist',
          component: () => import(/* webpackChunkName: "about" */ '../admin/admin/adminlist.vue')
        },
        {
          path: '/setadmin',
          name: 'setadmin',
          component: () => import(/* webpackChunkName: "about" */ '../admin/admin/Setadmin.vue')
        },
        {
          path: '/setadmin/:id',
          name: 'setadmindetail',
          component: () => import(/* webpackChunkName: "about" */ '../admin/admin/Setadmin.vue'),
          props:true
        },
      ]
    },

  ]
})
