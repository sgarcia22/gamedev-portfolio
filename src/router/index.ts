import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Root',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/resume',
  //   name: 'Resume',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Resume.vue')
  // },
  {
    path: '/game-projects',
    name: 'Game Projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameProjects.vue')
  },
  {
    path: '/other-projects',
    name: 'Other Projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/OtherProjects.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: () => import(/* webpackChunkName: "about" */ '../views/PrivacyPolicy.vue')
  },
  // {
  //   path: '/tos',
  //   name: 'TermsOfService',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/TermsOfService.vue')
  // },
  {
    path: '/googletos',
    name: 'GoogleStoreTerms',
    component: () => import(/* webpackChunkName: "about" */ '../views/GoogleStoreTerms.vue')
  },
  {
    path: '/crazydrivertos',
    name: 'CrazyDriverGoogleStoreTerms',
    component: () => import(/* webpackChunkName: "about" */ '../views/CrazyDriverGoogleStoreTerms.vue')
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
