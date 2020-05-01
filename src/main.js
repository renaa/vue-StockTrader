import Vue from 'vue'
import App from './App.vue'


import VueRouter from 'vue-router'
import { routes } from './routes.js'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

import  { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import store from './store/store'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
