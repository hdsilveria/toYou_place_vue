import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import './libs/bootstrap'
import './libs/axios'
import './libs/vue-alert'

Vue.config.productionTip = false
require('./assets/scss/index.scss')

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
