/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import router from '@/router';
import store from '@/store';
import base from './base';
import { Message } from 'element-ui';

// 为了实现Class的私有属性
const showMessage = Symbol('showMessage');
/** 
 *  重写ElementUI的Message
 *  single默认值true，因为项目需求，默认只弹出一个，可以根据实际需要设置
 */
class DonMessage {
	success(options, single = true) {
		this[showMessage]('success', options, single)
	}
	warning(options, single = true) {
		this[showMessage]('warning', options, single)
	}
	info(options, single = true) {
		this[showMessage]('info', options, single)
	}
	error(options, single = true) {
		this[showMessage]('error', options, single)
	}

	[showMessage](type, options, single) {
		if (single) {
			// 判断是否已存在Message
			if (document.getElementsByClassName('el-message').length === 0) {
				Message[type](options)
			}
		} else {
			Message[type](options)
		}
	}
}

/** 
 * 提示函数 
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = msg => {
	new DonMessage().error({
		message: msg,
		duration: 1000
	});
}

/** 
 * 前置导航守卫 
 * 拦截直接进入需要登录的页面
 */
router.beforeEach((to, from, next) => {
	if (to.meta.needLogin) { // 判断跳转的路由是否需要登录
		if (localStorage.getItem('token')) {
			next() //直接进入对应的路由
		} else {
			sessionStorage.setItem('url', to.path)
			tip('用户未授权或授权过期，请重新登录');
			next('/login') //当前路由被终止，进入login路由导航
		}
	} else {
		next() //直接进入对应的路由
	}
});

/** 
 * 跳转登录页
 * 存储当前页面路由，登录完成后返回当前页面
 */
const toLogin = () => {
	let url = router.currentRoute.name;
	if (url !== 'login') {
		router.replace({
			name: 'login'
		});
		sessionStorage.setItem('url', url);
		localStorage.removeItem('token');
	}
}

/** 
 * 404页面不存在
 */
const toNotFound = () => {
	router.replace({
		name: 'notFound'
	});
}

/** 
 * 500服务器错误
 * 存储当前页面路由，刷新或点击按钮重载完成后返回当前页面
 */
const toServerError = () => {
	router.replace({
		path: 'serverError'
	});
	sessionStorage.setItem('url', router.currentRoute.fullPath);
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
			tip('用户未授权或授权过期，请重新登录');
			localStorage.removeItem('token');
			setTimeout(() => {
				toLogin();
			}, 1000);
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
				toNotFound();
			}, 1000);
			break;
		// 500服务器错误
		case 500:
			tip('服务器错误');
			setTimeout(() => {
				toServerError();
			}, 1000);
			break;
		default:
			console.log(other);
	}
}

// 创建axios实例
// 特别重要说明: 千万不要使用axios 0.19.0版本，自定义参数无法生效
let instance = axios.create({
	timeout: 1000 * 5,  // 请求超时
	retry: 4,						// 请求超时后，重复请求次数
	retryDelay: 100		 // 请求超时后，重复请求间隔时间
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
		let token = localStorage.getItem('token');
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
			// 如果有返回新token，更新localStorage的token
			if (res.headers.token) {
				const token = `Bearer ${res.headers.token}`;
				// console.log(token);
				localStorage.setItem('token', token);
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
		const { response } = error;
		if (response) {
			// 请求已发出，但是不在2xx的范围 
			// console.log('2-请求失败');
			errorHandle(response.status, response.statusText);
			return Promise.reject(response);
		} else {

			// 处理请求失败，重新请求的情况
			if (base.retry === true) {
				// 请求超时，抛出error.code= ECONNABORTED的错误,错误信息:timeout of xxx ms exceeded
				if (error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1) {
					let config = error.config;
					// console.log('config:', config);
					// console.log('retry:', config.retry);
					config.__retryCount = config.__retryCount || 0;

					if (config.__retryCount >= config.retry) {
						// Reject with the error
						// window.location.reload();
						return Promise.reject(error);
					}

					// Increase the retry count
					config.__retryCount += 1;
					// console.log('__retryCount:', config.__retryCount);

					// Create new promise to handle exponential backoff
					let backoff = new Promise(function (resolve) {
						console.log(`接口：${config.url}，请求超时，重新请求`);
						setTimeout(function () {
							// console.log('resolve');
							resolve();
						}, config.retryDelay || 1);
					});

					return backoff.then(function () {
						return instance(config);
					});
				}
			}

			// 处理断网的情况
			// 断网时，更新state的network状态
			// network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
			// 可参考https://www.cnblogs.com/panax/p/10942889.html
			if (!window.navigator.onLine) {
				store.commit('changeNetwork', false);
			} else {
				return Promise.reject(error);
			}

		}
	}
);

export default instance;