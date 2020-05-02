import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'
import '@/assets/font/font.scss'
import '@/common/scss/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
