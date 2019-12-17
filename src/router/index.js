import Vue from 'vue';
import VueRouter from 'vue-router';
import { encrypt } from '@u/encrypt';

const routes = [
	// 重定向到主页
	{
		path:'/',
		redirect: {
			name: 'college'
		},
	},
	{
		path: '/info',
		name: 'info',
		component: r => require.ensure([], () => r(require('@p/info/info')), 'info')
	},
	{
		path: '/video',
		component: r => require.ensure([], () => r(require('@p/video/video')), 'video'),
		meta: {
			needLogin:true
		},
	},
	{
		name: 'login',
		path: '/login',
		component: r => require.ensure([], () => r(require('@p/login/login')), 'login'),
		meta: {
			title: '登录'
		},
		// 路由守卫,进入登录页清除token
		beforeEnter: (to, from, next) => {
			localStorage.removeItem(encrypt('loginTime'));
			localStorage.removeItem(encrypt('token'));
			next();
		}
	},
	{
		name: 'college',
		path: '/college',
		component: r => require.ensure([], () => r(require('@p/college/college')), 'college'),
		meta: {
			title: '网络学院'
		}
	},
	{
		name: 'articleList',
		path: '/articleList',
		component: r => require.ensure([], () => r(require('@p/articleList/articleList')), 'articleList')
	},
	{
		path: '/mine',
		component: r => require.ensure([], () => r(require('@p/mine/mine')), 'mine'),
		meta: {
			needLogin: true, //需要登录
			title: '我的学习'
		},
		children: [
			{
				name: 'mineStudy',
				path: 'mineStudy',
				component: r => require.ensure([], () => r(require('@c/mineStudy/mineStudy')), 'mineStudy'),
				meta: {
					needLogin: true,
					title: '我的学习'
				}
			},
			{
				path: 'mineHistory',
				name: 'mainHistory',
				component: r => require.ensure([], () => r(require('@c/classHistory/classHistory')), 'classHistory'),
				meta: {
					needLogin: true,
					title: '学习记录 - 我的学习'
				}
			},
			{
				name: 'collection',
				path: 'collection',
				component: r => require.ensure([], () => r(require('@c/collection/collection')), 'collection'),
				meta: {
					needLogin: true,
					title: '我的收藏 - 我的学习'
				}
			},
			{
				name: 'accumulatePoints',
				path: 'accumulatePoints',
				component: r => require.ensure([], () => r(require('@c/accumulate/accumulate')), 'accumulate'),
				meta: {
					needLogin: true,
					title: '积分明细 - 我的学习'
				}
			}
		]
	},
	// 500
	{
		name: 'serverError',
		path: '/serverError',
		component: r => require.ensure([], () => r(require('@p/serverError/serverError')), 'serverError'),
		meta: {
			onlyPage: true
		}
	},
	// 404
	{
		name: 'notFound',
		path: '*',
		component: r => require.ensure([], () => r(require('@p/notFound/notFound')), 'notFound'),
		meta: {
			onlyPage: true
		}
	}
]

Vue.use(VueRouter);

// let router;
// // 开发环境,vue-router采用hash模式,其他环境使用history模式
// if (process.env.VUE_APP_CURRENTMODE == 'dev') {
// 	router =  new VueRouter({
// 		routes
// 	});
// } else {
// 	router = new VueRouter({
// 		mode: 'history',
// 		routes
// 	});
// }

export default new VueRouter({
	mode: 'history',
	routes
});