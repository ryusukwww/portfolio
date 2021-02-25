import Vue from 'vue';
import App from './App.vue';
import router from "./router.js";
import axios from 'axios';
import store from './store';

Vue.config.productionTip = true
Vue.prototype.$axios = axios; 

store.dispatch('autoLogin');

new Vue({
  router : router,
  store,
  render: h => h(App),
}).$mount('#app')


