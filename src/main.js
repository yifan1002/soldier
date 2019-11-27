import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import Routes from './router';
import Vuex from 'vuex';
import './var.scss'
import Store from "./store";
import './plugins/element.js'
import api from './api';
import md5 from 'md5';

Vue.config.productionTip = false

Vue.use(Vuex);
const store = new Vuex.Store(Store);

Vue.use(VueRouter);
const router = new VueRouter(Routes);

Vue.prototype.$api = api;
Vue.prototype.$md5 = md5;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
