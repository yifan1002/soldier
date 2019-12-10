/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import router from '@/router';
import store from '@/store';
import {
	Message
} from 'element-ui';

/** 
 * 提示函数 
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = msg => {
	Message.error({
		message: msg,
		duration: 1000
	});
}

/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
	console.log(router);
	router.replace({
		path: '/login',
		query: {
			redirect: router.currentRoute.fullPath
		}
	});
	localStorage.removeItem('token');
	store.commit('changeToken', '');
	store.commit('loginSuccess', false);
}

/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
	// 状态码判断
	switch (status) {
		// 5001 用户未授权或授权过期
		// 清除token并跳转到登录页
		case 5001:
			tip('用户未授权或授权过期');
			localStorage.removeItem('token');
			store.commit('loginSuccess', false);
			setTimeout(() => {
				toLogin();
			}, 0);
			break;
			// 5002 用户不存在或账号密码错误
		case 5002:
			tip('用户不存在或账号密码错误');
			setTimeout(() => {
				toLogin();
			}, 1000);
			break;
			// 404请求不存在
		case 404:
			tip('请求的资源不存在');
			setTimeout(() => {
				alert('此处跳转到404页面');
			}, 1000);
			break;
			// 500服务器错误
		case 500:
			tip('服务器错误');
			setTimeout(() => {
				alert('此处跳转到500错误页面');
			}, 1000);
			break;
		default:
			console.log(other);
	}
}

// 创建axios实例
var instance = axios.create({
	timeout: 1000 * 1
});
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */
instance.interceptors.request.use(
	config => {
		// 登录流程控制中，根据本地是否存在token判断用户的登录情况        
		// 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        
		// 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码        
		// 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。        
		let token = store.state.token;
		if (!token) token = localStorage.getItem('token');
		token && (config.headers.Authorization = token);
		return config;
	},
	error => Promise.error(error)
);

// 响应拦截器
instance.interceptors.response.use(
	// 请求成功
	res => {
		if (res.data.code === 200) {
			// console.log('1-请求成功');
			// 如果有返回新token，刷新vuex和localStorage的token
			if (res.headers.token) {
				const token = `Bearer ${res.headers.token}`;
				console.log(token);
				localStorage.setItem('token', token);
				store.commit('changeToken', token);
			}
			return Promise.resolve(res);
		} else {
			errorHandle(res.data.code, res.data.msg);
			// console.log('2-请求失败');
			return Promise.reject(res);
		}
	},
	// 请求失败
	error => {
		const {
			response
		} = error;
		if (response) {
			// 请求已发出，但是不在2xx的范围 
			// console.log('2-请求失败');
			errorHandle(response.status, response.statusText);
			return Promise.reject(response);
		} else {
			// 处理断网的情况
			// eg:请求超时或断网时，更新state的network状态
			// network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
			// 关于断网组件中的刷新重新获取数据，会在断网组件中说明
			if (!window.navigator.onLine) {
				store.commit('changeNetwork', false);
			} else {
				return Promise.reject(error);
			}
		}
	}
);

export default instance;