import Vue from 'vue';
import App from './App';
import router from './router';
import store from "./store";
import './var.scss'
import './plugins/element.js'
import api from './api';
import md5 from 'md5';

Vue.config.productionTip = false
Vue.prototype.$api = api;
Vue.prototype.$md5 = md5;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
