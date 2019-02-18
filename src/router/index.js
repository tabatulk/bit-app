import Vue from 'vue'

import Router from 'vue-router'

import MainPage from '../components/MainPage.vue';
import Profile from '../components/Profile.vue';
import Settings from '../components/Settings.vue';

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: "MainPage",
        component: MainPage
      },
      {
        path: '/Profile',
        name: "Profile",
        component: Profile
      },
      {
        path: '/Settings',
        name: "Settings",
        component: Settings
      },
    ]
  })
  