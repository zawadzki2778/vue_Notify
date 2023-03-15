// default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Pages
import Home from '@/pages/Home'
import NotifyPage from '@/pages/NotifyPage'
import NotFound from "@/pages/404"


// Routering
export default new Router({
  // mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/NotifyPage',
      name: 'NotifyPage',
      component: NotifyPage
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    },
  ]
})