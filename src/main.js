import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueRouter from 'vue-router'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
