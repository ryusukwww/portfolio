import Vue from 'vue'
import App from './App.vue'
import router from "./router.js"
import axios from 'axios'

Vue.config.productionTip = true
Vue.prototype.$axios = axios; 

new Vue({
  router : router,
  render: h => h(App),
}).$mount('#app')
