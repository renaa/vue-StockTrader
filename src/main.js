import Vue from 'vue'
import App from './App.vue'

// vue router
import VueRouter from 'vue-router'
import { routes } from './routes.js'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

// bootstrapVue
import  { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// store
import store from './store/store'

// filter
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

// vue resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'https://vuejs-stocktrader-a929a.firebaseio.com/'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
