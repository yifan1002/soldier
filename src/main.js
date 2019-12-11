import Vue from 'vue';
import md5 from 'md5';
import App from '@/App';
import router from '@/router';
import store from "@/store";
import api from '@/api';
import '@/plugins/element.js';
import { HappyScroll } from 'vue-happy-scroll'
//自定义组件名
Vue.component('happy-scroll', HappyScroll)
// 引入css
import 'vue-happy-scroll/docs/happy-scroll.css'
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
	data: {
		Bus: new Vue() // 用于非父子组件通信
	}
}).$mount('#app')
