import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminRoutes from './admin-routes'
import PublicRoutes from './public-routes'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../views/layouts/AuthLayout.vue'),
        beforeRoute () {

        },
        children: [
            ...PublicRoutes
        ]
    },
    {
        name: 'admin',
        path: '/admin',
        component: () => import('../views/layouts/AdminLayout.vue'),
        beforeEnter: (to, from, next) => {
          document.body.className += 'skin-dark sidebar-mini'
          next()
        },
        children: [
            ...AdminRoutes
        ]
    }
]

var router = new VueRouter({
    routes: routes,
    mode: 'history',
    linkActiveClass: 'open active',
    scrollBehavior: function (to, from, savedPosition) {
      return savedPosition || { x: 0, y: 0 }
    }
  })

export default router