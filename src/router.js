import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index'
import detail from './views/home/detail'
import process from './views/home/detailPart/process'
import advantage from './views/home/detailPart/advantage'
import pictures from './views/home/detailPart/pictures'
import setting from './views/setting/index'
import intro from './views/setting/intro'

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
       path:'/detail/:symbol/:name/:code',
       name:'detail',
       component:detail,
        children:[
            {
                path: '',
                name:process,
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
          path:'/set',
          component:setting
      },
      {
          path:'/about',
          component:intro
      }
  ]
})
