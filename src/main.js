import Vue from 'vue'
import store from './store/index.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './components/App/App.vue'


var app = new Vue({
  el: '#app',
  render: h => h(App),
  // store,
  // router
})
