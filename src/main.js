import Vue from 'vue';
import md5 from 'md5';
import App from '@/App';
import router from '@/router';
import store from "@/store";
import api from '@/api';
import '@/plugins/element.js';

// 引入全局过滤器
import * as filters from '@u/filters';
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});


Vue.config.productionTip = false
Vue.prototype.$api = api;
Vue.prototype.$md5 = md5;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
