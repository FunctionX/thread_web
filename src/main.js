import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/style/reset.scss'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()


window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
