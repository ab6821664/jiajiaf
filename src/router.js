import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index'
import detail from './views/home/detail'
import process from './views/home/detailPart/process'
import advantage from './views/home/detailPart/advantage'
import pictures from './views/home/detailPart/pictures'

Vue.use(Router)

export default new Router({
    mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
       path:'/detail',
       name:'detail',
       component:detail,
        children:[
            {
              path:"process",
                component:process
            },
            {
                path:"advantage",
                component:advantage
            },
            {
                path:"pictures",
                component:pictures
            }
        ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
